import { createHttpClient } from "edgedb";

console.log("Instance:", process.env.REACT_APP_EDGEDB_INSTANCE);
console.log("Secret Key:", process.env.REACT_APP_EDGEDB_SECRET_KEY);

const client = createHttpClient({
  dsn: process.env.REACT_APP_EDGEDB_INSTANCE,
  secretKey: process.env.REACT_APP_EDGEDB_SECRET_KEY,
});

export async function fetchMovies() {
  return await client.query(`SELECT Movie filter .title = "Nosferatu";`);
}
