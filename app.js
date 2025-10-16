const express = require("express");
const app = express();

const methodOverride = require("method-override");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"));

// Import database and connect
const connectDB = require("./config/connectDB");
connectDB();

// Set view engine
app.set("view engine", "ejs");

//routes
const routes = require('./routes/routes.js')

app.get("/", (req, res) => {
  res.send("Welcome to SpareRoom Clone! <a href='/list'>View Listings</a>");
});

app.use("/list", routes);

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
