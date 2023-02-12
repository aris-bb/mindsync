// use axum::{
//     extract::{
//         connect_info::ConnectInfo,
//         ws::{Message, WebSocket, WebSocketUpgrade},
//         TypedHeader,
//     },
//     headers,
//     http::StatusCode,
//     response::IntoResponse,
//     routing::{get, post},
//     Json, Router,
// };
// use serde::{Deserialize, Serialize};
// use std::net::SocketAddr;

// #[tokio::main]
// async fn main() {
//     // initialize tracing
//     tracing_subscriber::fmt::init();

//     // build our application with a route
//     let app = Router::new()
//         // `GET /` goes to `root`
//         .route("/", get(root))
//         // `POST /users` goes to `create_user`
//         .route("/users", post(create_user))
//         .route("/ws", get(ws_handler));

//     // run our app with hyper
//     // `axum::Server` is a re-export of `hyper::Server`
//     let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
//     tracing::debug!("listening on {}", addr);
//     axum::Server::bind(&addr)
//         .serve(app.into_make_service())
//         .await
//         .unwrap();
// }

// // basic handler that responds with a static string
// async fn root() -> &'static str {
//     "Heallo, Worlxdxd!"
// }

// /// The handler for the HTTP request (this gets called when the HTTP GET lands at the start
// /// of websocket negotiation). After this completes, the actual switching from HTTP to
// /// websocket protocol will occur.
// /// This is the last point where we can extract TCP/IP metadata such as IP address of the client
// /// as well as things from HTTP headers such as user-agent of the browser etc.
// async fn ws_handler(
//     ws: WebSocketUpgrade,
//     user_agent: Option<TypedHeader<headers::UserAgent>>,
//     ConnectInfo(addr): ConnectInfo<SocketAddr>,
// ) -> impl IntoResponse {
//     let user_agent = if let Some(TypedHeader(user_agent)) = user_agent {
//         user_agent.to_string()
//     } else {
//         String::from("Unknown browser")
//     };
//     println!("`{}` at {} connected.", user_agent, addr.to_string());
//     // finalize the upgrade process by returning upgrade callback.
//     // we can customize the callback by sending additional info such as address.
//     ws.on_upgrade(move |socket| handle_socket(socket, addr))
// }

// /// Actual websocket statemachine (one will be spawned per connection)
// async fn handle_socket(mut socket: WebSocket, who: SocketAddr) {
//     tracing::debug!("on socket");
// }

// async fn create_user(
//     // this argument tells axum to parse the request body
//     // as JSON into a `CreateUser` type
//     Json(payload): Json<CreateUser>,
// ) -> (StatusCode, Json<User>) {
//     // insert your application logic here
//     let user = User {
//         id: 1337,
//         username: payload.username,
//     };

//     // this will be converted into a JSON response
//     // with a status code of `201 Created`
//     (StatusCode::CREATED, Json(user))
// }

// // the input to our `create_user` handler
// #[derive(Deserialize)]
// struct CreateUser {
//     username: String,
// }

// // the output to our `create_user` handler
// #[derive(Serialize)]
// struct User {
//     id: u64,
//     username: String,
// }

//! Example websocket server.
//!
//! Run the server with
//! ```not_rust
//! cargo run -p example-websockets --bin example-websockets
//! ```
//!
//! Run a browser client with
//! ```not_rust
//! firefox http://localhost:3000
//! ```
//!
//! Alternatively you can run the rust client (showing two
//! concurrent websocket connections being established) with
//! ```not_rust
//! cargo run -p example-websockets --bin example-client
//! ```

use axum::{
    extract::{
        ws::{Message, WebSocket, WebSocketUpgrade},
        State, TypedHeader,
    },
    headers,
    http::StatusCode,
    response::IntoResponse,
    routing::{get, get_service, post},
    Json, Router,
};

use std::borrow::Cow;
use std::ops::ControlFlow;
use std::process;
use std::{net::SocketAddr, path::PathBuf};
use tower_http::{
    services::ServeDir,
    trace::{DefaultMakeSpan, TraceLayer},
};

use tracing_subscriber::{layer::SubscriberExt, util::SubscriberInitExt};

//allows to extract the IP of connecting user
use axum::extract::connect_info::ConnectInfo;
use axum::extract::ws::CloseFrame;

//allows to split the websocket stream into separate TX and RX branches
use futures::{sink::SinkExt, stream::StreamExt};

use dotenv::dotenv;

use serde::{Deserialize, Serialize};

use mongodb::Client;

mod controllers;
mod database;
mod models;

#[tokio::main]
async fn main() {
    // load .env variables
    dotenv().ok();

    // initialize tracing
    tracing_subscriber::registry()
        .with(
            tracing_subscriber::EnvFilter::try_from_default_env()
                .unwrap_or_else(|_| "server=debug,tower_http=debug".into()),
        )
        .with(tracing_subscriber::fmt::layer())
        .init();

    // initialize database connection
    let db = database::initialize()
        .await
        .expect("Database must be valid");

    // initialize application routes
    let app = Router::new()
        .route("/", get(root))
        .route("/users", post(create_user))
        .route("/ws", get(controllers::websocket::handler))
        .with_state(db)
        .layer(
            TraceLayer::new_for_http()
                .make_span_with(DefaultMakeSpan::default().include_headers(true)),
        );

    // start listening
    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));

    tracing::debug!("Listening on {}", addr);

    axum::Server::bind(&addr)
        .serve(app.into_make_service_with_connect_info::<SocketAddr>())
        .await
        .unwrap();
}

async fn root(State(db): State<Client>) -> &'static str {
    // for db_name in db.list_database_names(None, None).await? {
    //     tracing::debug!("{}", db_name);
    // }

    "Heallo, World!"
}

async fn create_user(
    // this argument tells axum to parse the request body
    // as JSON into a `CreateUser` type
    Json(payload): Json<CreateUser>,
) -> (StatusCode, Json<User>) {
    // insert your application logic here
    let user = User {
        id: 1337,
        username: payload.username,
    };

    // this will be converted into a JSON response
    // with a status code of `201 Created`
    (StatusCode::CREATED, Json(user))
}

// the input to our `create_user` handler
#[derive(Deserialize)]
struct CreateUser {
    username: String,
}

// the output to our `create_user` handler
#[derive(Serialize)]
struct User {
    id: u64,
    username: String,
}
