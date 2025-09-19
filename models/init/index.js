//connecting the db and seeding the sample data
const db = require("mongoose");
const initData = require("./sampleData.js");
const List = require("../list.js");

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

async function initDb(){
await List.deleteMany();
await List.insertMany(initData.data);
console.log("data initialised");
}

initDb();