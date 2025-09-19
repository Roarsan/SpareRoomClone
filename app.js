const express = require("express");
const app = express();

const db = require("mongoose");
const MONGO_URL = "mongodb://127.0.0.1:27017/spare_room";

async function main() {
  try {
    await db.connect(MONGO_URL);
    console.log("db connected");
  } catch (err) {
    console.error("Error connecting to DB:", err);
  }
}

main();

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(8080, () => {
  console.log("🚀 Server listening on port 8080");
});

const List = require("./models/list.js");

app.get("/List", async (req, res) => {
  const listing = await list.find();
  res.send(listing);
});
