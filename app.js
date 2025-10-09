const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

// Import database and connect
const connectDB = require("./config/connectDB");
connectDB();

// Set view engine
app.set("view engine", "ejs");

// Routes
const listController = require("./controllers/listController");
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.send("Welcome to SpareRoom Clone! <a href='/list'>View Listings</a>");
});
app.get("/list", listController.getAllListings);
app.get("/list/newlisting", listController.newListing);
app.post("/list", listController.createListing);
app.get("/list/:id", listController.showListing);
app.get("/list/:id/editlisting", listController.editListing);
app.put("/list/:id", listController.updateListing);
app.delete("/list/:id",listController.deleteListing)

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
