// services/userService.js
const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");
const ExpressError = require("../utils/ExpressError");

const registerUser = async ({ username, email, password }) => {
  const hashedPassword = await bcrypt.hash(password, 12);
  const createdUser = await userModel.create({ username, email, password: hashedPassword });
  return createdUser;
};

const authenticateUser = async ({ email, password }) => {
  const userEmail = await userModel.findOne({ email });
  if (!userEmail) return null;
  
  const isValid = await bcrypt.compare(password, userEmail.password);
  if (!isValid) return null;
  
  return userEmail;
};

module.exports = { registerUser, authenticateUser };
