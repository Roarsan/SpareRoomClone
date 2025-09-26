//connecting the db and seeding the sample data
const db = require("mongoose");
const initData = require("./sampleData.js");
const ListModel = require("../listModel.js");

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
await ListModel.deleteMany();
await ListModel.insertMany(initData.data);
console.log("sample data initialized");
}

initDb();