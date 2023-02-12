use mongodb::bson::oid::ObjectId;
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct User {
    _id: ObjectId,
    username: String,
    email: String,
    password: String,
    salt: String,
    verified: bool,
}
