use std::net::SocketAddr;

use axum::{routing::get, Router};
use tower_http::trace::{DefaultMakeSpan, TraceLayer};
use tracing_subscriber::{layer::SubscriberExt, util::SubscriberInitExt};

mod controllers;
mod database;
mod models;
mod viewmodels;

#[tokio::main]
async fn main() {
    // load .env variables
    dotenv::dotenv().ok();

    // initialize tracing
    tracing_subscriber::registry()
        .with(
            tracing_subscriber::EnvFilter::try_from_default_env()
                .unwrap_or_else(|_| "server=debug,tower_http=debug".into()),
        )
        .with(tracing_subscriber::fmt::layer())
        .init();

    // initialize database connection
    let db_client = database::initialize()
        .await
        .expect("Database must be valid");

    let db = db_client.database("mindsync");

    // initialize application routes
    let app = Router::new()
        .fallback(fallback)
        .route("/test", get(controllers::users::register))
        .route("/ws", get(controllers::websocket::handler))
        .with_state(db)
        .layer(
            TraceLayer::new_for_http()
                .make_span_with(DefaultMakeSpan::default().include_headers(true)),
        );

    // start listening
    let addr = SocketAddr::from(([127, 0, 0, 1], 4200));

    tracing::debug!("Listening on {}", addr);

    axum::Server::bind(&addr)
        .serve(app.into_make_service_with_connect_info::<SocketAddr>())
        .with_graceful_shutdown(shutdown_signal())
        .await
        .unwrap();
}

pub async fn fallback(uri: axum::http::Uri) -> impl axum::response::IntoResponse {
    (
        axum::http::StatusCode::NOT_FOUND,
        format!("No route {}", uri),
    )
}

async fn shutdown_signal() {
    tokio::signal::ctrl_c()
        .await
        .expect("Expected tokio signal Ctrl-C");

    println!("Shutting down...");
}
