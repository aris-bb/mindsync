use argon2::{
    password_hash::{rand_core::OsRng, PasswordHasher, PasswordVerifier, SaltString},
    Argon2,
};
use axum::{extract::State, http::StatusCode, response::IntoResponse, Json};
use jsonwebtoken::{decode, encode, DecodingKey, EncodingKey, Header, Validation};
use mongodb::{bson::doc, Database};
use serde_json::json;
use std::env;
use validator::Validate;

use crate::models::{api::users::*, database::user::User};

// pub struct DbError(mongodb::error::Error);

// impl IntoResponse for DbError {
//     fn into_response(self) -> axum::response::Response {
//         (
//             StatusCode::INTERNAL_SERVER_ERROR,
//             format!("Error: {}", self.0),
//         )
//             .into_response()
//     }
// }

// impl<E> From<E> for DbError
// where
//     E: Into<mongodb::error::Error>,
// {
//     fn from(err: E) -> Self {
//         Self(err.into())
//     }
// }

pub struct AppError(anyhow::Error);

impl IntoResponse for AppError {
    fn into_response(self) -> axum::response::Response {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error: {}", self.0),
        )
            .into_response()
    }
}

impl<E> From<E> for AppError
where
    E: Into<anyhow::Error>,
{
    fn from(err: E) -> Self {
        Self(err.into())
    }
}

// impl IntoResponse for mongodb::error::Error {
//     fn into_response(self) -> axum::response::Response {
//         (
//             StatusCode::INTERNAL_SERVER_ERROR,
//             format!("Error: {}", self.0),
//         )
//             .into_response()
//     }
// }

pub async fn register(
    State(db): State<Database>,
    Json(payload): Json<RegisterPayload>,
) -> Result<impl IntoResponse, AppError> {
    // if let Err(errors) = payload.validate() {
    //     return Ok((StatusCode::BAD_REQUEST, Json(errors)).into_response());
    // }
    payload.validate()?;

    // Check if username or email already exists
    let existing_user = db
        .collection::<User>("users")
        .find_one(
            doc! {"$or": [{"username": &payload.username}, {"email": &payload.email}]},
            None,
        )
        .await?;

    // if let Err(existing_user_error) = existing_user {
    //     return (
    //         StatusCode::INTERNAL_SERVER_ERROR,
    //         Json(existing_user_error.to_string()),
    //     )
    //         .into_response();
    // } else {
    //     tracing::debug!("{:?}", existing_user);
    // }

    Ok((StatusCode::OK, Json(json!({"hello": 1}))).into_response())

    // if let Ok(Some(_)) = existing_user {
    //     return (
    //         StatusCode::CONFLICT,
    //         Err("Username or email already exists"),
    //     );
    // }

    // // Generate a salt and hash the password
    // let salt = SaltString::generate(&mut OsRng);
    // let argon2 = Argon2::default();
    // let hash = argon2
    //     .hash_password(payload.password.as_bytes(), &salt)?
    //     .to_string();

    // // Create a new user document
    // let user = User {
    //     _id: ObjectId::new(),
    //     username: payload.username,
    //     email: payload.email,
    //     password: hash,
    //     salt,
    //     verified: false,
    // };

    // // Insert the new user document
    // db.collection("users")
    //     .insert_one(user.clone(), None)
    //     .await
    //     .unwrap();

    // // Create and sign a JWT token
    // let secret = env::var("JWT_SECRET").expect("JWT_SECRET must be set");
    // let token = encode(
    //     &Header::default(),
    //     &user._id.to_hex(),
    //     &EncodingKey::from_secret(secret.as_ref()),
    // )
    // .expect("Error creating JWT token");

    // // Return the token and username in the response
    // (
    //     StatusCode::CREATED,
    //     Ok(Json(RegisterResponse {
    //         token,
    //         username: user.username,
    //     })),
    // )
}
