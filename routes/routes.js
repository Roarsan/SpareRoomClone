// routes/routes.js
const express = require("express");
const router = express.Router();
const listController = require("../controllers/listController");

// All listing-related routes
router.get("/", listController.getAllListings);
router.get("/newlisting", listController.newListing);
router.post("/createlisting", listController.createListing);
router.get("/:id", listController.showListingDetails);
router.get("/:id/editlisting", listController.editListing);
router.put("/:id", listController.updateListing);
router.delete("/:id", listController.deleteListing);

module.exports = router;
