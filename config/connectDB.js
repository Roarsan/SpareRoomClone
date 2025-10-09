const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/spare_room";

async function connectDB() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("✅ Database connected successfully");
  } catch (err) {
    console.error("❌ Error connecting to database:", err);
    process.exit(1);
  }
}

module.exports = connectDB;
