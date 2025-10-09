//connecting the db and seeding the sample data
const initData = require("./sampleData.js");
const ListModel = require("../listModel.js");

// Import database connection
const connectDB = require("../../config/connectDB");

// Connect to database
connectDB();

async function initDB(){
await ListModel.deleteMany();
await ListModel.insertMany(initData.data);
console.log("sample data initialized");
}

initDB();