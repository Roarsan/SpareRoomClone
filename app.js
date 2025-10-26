require('dotenv').config();
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const connectDB = require("./config/connectDB");
const routes = require("./routes/routes.js");
const ExpressError = require('./utils/ExpressError');
const setupSession = require('./config/session');
// Connect to MongoDB
connectDB();

// View engine
app.set("view engine", "ejs");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(methodOverride("_method"));

// Sessions
setupSession(app);


// Routes
app.get("/", (req, res) => {
  res.send("Welcome to SpareRoom Clone! <a href='/list'>View Listings</a>");
});

app.use("/list", routes);

// 404 handler
app.all(/.*/, (req, res, next) => {
  next(new ExpressError(404, 'Page not found'));
});

// Global error handler
app.use((err, req, res, next) => {
  const { statusCode = 500, message = 'Something went wrong' } = err;
  res.status(statusCode).render('error', {err});
});

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
