import { MongoClient } from 'mongodb';

const URI = process.env.MONGODB_URI;
const dbName = process.env.MONGO_DB;

let cacheDb;
let cacheClient;

if (!URI) {
  throw new Error(
    'Please define the MONGODB_UI enviroment variable inside .env.local',
  );
}

if (!dbName) {
  throw new Error(
    'Please define the MONGO_DB enviroment variable inside .env.local',
  );
}

export default async function connectDatabase() {
  if (cacheDb && cacheClient) {
    return { client: cacheClient, db: cacheDb };
  }

  const client = await MongoClient.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = await client.db(dbName);

  cacheClient = client;
  cacheDb = db;

  return { client, db };
}
