import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

const DB_CONN_STRING = "";
const DB_NAME = "SvesteDB";
const USERS_COLLECTION_NAME = "SvesteUsers";
const SESSIONS_COLLECTION_NAME = "SvesteSessions";

export const collections: {
  SvesteUsers?: mongoDB.Collection;
  SvesteSessions?: mongoDB.Collection;
} = {};

export async function connectToDatabase() {
  dotenv.config();
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(DB_CONN_STRING);
  await client.connect();
  const db: mongoDB.Db = client.db(DB_NAME);
  const usersCollection: mongoDB.Collection = db.collection(
    USERS_COLLECTION_NAME
  );
  collections.SvesteUsers = usersCollection;
  const sessionsCollection: mongoDB.Collection = db.collection(
    SESSIONS_COLLECTION_NAME
  );
  collections.SvesteSessions = sessionsCollection;
  console.log(
    `Successfully connected to database: ${db.databaseName} and collections: ${usersCollection.collectionName}, ${sessionsCollection.collectionName}`
  );
}

export default collections;
