//connecting the db and seeding the sample data
const initData = require("../models/sampleData/sampleData.js");
const ListModel = require("../models/listModel.js");

// Import database connection
const connectDB = require("../config/connectDB.js");

// Connect to database
connectDB();

async function initDB(){
await ListModel.deleteMany();
await ListModel.insertMany(initData.data);
console.log("sample data initialized");
}

initDB();