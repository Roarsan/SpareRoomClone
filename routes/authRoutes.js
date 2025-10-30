const express = require("express");
const router = express.Router();
const auth = require("../controllers/authController");
const wrapAsync = require("../utils/wrapAsync");
const validate = require("../middleware/validateSchema");
const {registerSchema,loginSchema} = require("../joiSchemas/userSchema");


router.get("/register", auth.renderRegister);
router.post("/registerUser",validate(registerSchema), wrapAsync(auth.registerUser));
router.get("/login", auth.renderLogin);
router.post("/loginUser",validate(loginSchema), wrapAsync(auth.loginUser));
router.post("/logout", auth.logout);

module.exports = router;