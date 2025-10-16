const express = require("express");
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

//routes
const routes = require('./routes/routes.js')



// Import database and connect
const connectDB = require("./config/connectDB");
connectDB();

// Set view engine
app.set("view engine", "ejs");

// Routes
const listController = require("./controllers/listController");


app.get("/", (req, res) => {
  res.send("Welcome to SpareRoom Clone! <a href='/list'>View Listings</a>");
});

app.use("/list", routes);

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
