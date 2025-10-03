//connecting the db and seeding the sample data
const initData = require("./sampleData.js");
const ListModel = require("../listModel.js");

// Import database connection
const connectDB = require("../../config/database");

// Connect to database
connectDB();

async function initDb(){
await ListModel.deleteMany();
await ListModel.insertMany(initData.data);
console.log("sample data initialized");
}

initDb();