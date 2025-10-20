const express = require("express");
const app = express();
const methodOverride = require("method-override");
const connectDB = require("./config/connectDB");
const routes = require("./routes/routes.js");

// Connect to MongoDB
connectDB();

// View engine
app.set("view engine", "ejs");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(methodOverride("_method"));

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to SpareRoom Clone! <a href='/list'>View Listings</a>");
});

app.use("/list", routes);


// Global error handler
app.use((err, req, res, next) => {
  res.status(500).send("Something went wrong!");
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
