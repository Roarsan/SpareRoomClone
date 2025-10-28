const express = require("express");
const router = express.Router();
const auth = require("../controllers/authController");
const wrapAsync = require("../utils/wrapAsync");
const userSchema = require("../schemas/userSchema");
const validate = require('../utils/validateSchema');


router.get("/register", auth.renderRegister);
router.post("/registerUser",validate(userSchema), wrapAsync(auth.registerUser));
router.get("/login", auth.renderLogin);
router.post("/loginUser", wrapAsync(auth.loginUser));
router.post("/logout", auth.logout);

module.exports = router;