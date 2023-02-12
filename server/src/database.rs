use mongodb::{bson::doc, options::ClientOptions, Client};

pub async fn initialize() -> mongodb::error::Result<Client> {
    let connection_string = std::env::var("MONGODB_CONNECTION_STRING")
        .expect("Expected MONGODB_CONNECTION_STRING environment variable");

    let client_options = ClientOptions::parse(connection_string).await?;

    let client = Client::with_options(client_options)?;

    // Ping the server to see if we can connect to the cluster
    client
        .database("admin")
        .run_command(doc! {"ping": 1}, None)
        .await?;

    tracing::debug!("Connected to MongoDB cluster successfully.");

    tracing::debug!("Databases in the cluster:");
    for db_name in client.list_database_names(None, None).await? {
        tracing::debug!("{}", db_name);
    }

    Ok(client)
}
