const express = require("express");
const router = express.Router();
const listController = require("../controllers/listController");
const wrapAsync = require("../utils/wrapAsync");
const { isLoggedIn, isOwner } = require("../middleware/auth");
const listSchema = require('../schemas/listSchema');
const validate = require('../middleware/validateSchema');

// All listing-related routes
router.get("/listing", wrapAsync(listController.getAllListings));
router.get("/newlisting", isLoggedIn, listController.newListing);
router.post("/createlisting", isLoggedIn, validate(listSchema), wrapAsync(listController.createListing));
router.get("/:id", wrapAsync(listController.showListingDetails));
router.get("/:id/editlisting", isLoggedIn, wrapAsync(isOwner), wrapAsync(listController.editListing));
router.put("/:id", isLoggedIn, validate(listSchema), wrapAsync(isOwner), wrapAsync(listController.updateListing));
router.delete("/:id", isLoggedIn, wrapAsync(isOwner), wrapAsync(listController.deleteListing));

module.exports = router;
