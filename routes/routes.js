// routes/routes.js
const express = require("express");
const router = express.Router();
const listController = require("../controllers/listController");
const wrapAsync = require("../utils/wrapAsync");
const validateList = require('../utils/validateList');

// All listing-related routes
router.get("/", wrapAsync(listController.getAllListings));
router.get("/newlisting", wrapAsync(listController.newListing));
router.post("/createlisting", validateList, wrapAsync(listController.createListing));
router.get("/:id", wrapAsync(listController.showListingDetails));
router.get("/:id/editlisting", wrapAsync(listController.editListing));
router.put("/:id", validateList, wrapAsync(listController.updateListing));
router.delete("/:id", wrapAsync(listController.deleteListing));


module.exports = router;
