const express = require("express");
const app = express();

// Import database connection
const connectDB = require("./config/database");

// Connect to database
connectDB();

// Set view engine
app.set("view engine", "ejs");

// Routes

app.get("/", (req, res) => {
  res.send("Welcome to SpareRoom Clone! <a href='/list'>View Listings</a>");
});

const listController = require("./controllers/listController");

app.get("/list", listController.getAllListings);
app.get("/list/:id", listController.showListing);

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
