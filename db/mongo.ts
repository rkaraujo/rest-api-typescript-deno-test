import { MongoClient } from "https://deno.land/x/mongo@v0.8.0/mod.ts";
import { DB_HOST, DB_PORT } from "../config.ts";

const client = new MongoClient();
client.connectWithUri(`mongodb://${DB_HOST}:${DB_PORT}`);

const db = client.database("playlist");
const playlistObj = db.collection("playlists");

export default playlistObj;
