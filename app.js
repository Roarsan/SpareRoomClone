const express = require("express");
const app = express();

// Import database connection
const connectDB = require("./config/database");

// Import routes
const listRoutes = require("./routes/listRoutes");

// Connect to database
connectDB();

// Set view engine
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to SpareRoom Clone! <a href='/list'>View Listings</a>");
});

app.use("/list", listRoutes);

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});