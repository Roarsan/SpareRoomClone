const userService = require("../services/userService");

const authController = {
  renderRegister: (req, res) => {
     res.render("auth/register");
  },

  registerUser: async (req, res) => {
    const user = await userService.registerUser(req.body);
    req.session.userId = user._id;
    req.flash("success", "Welcome!");
    res.redirect("/list/listing");
  },

  renderLogin:  (req, res) => {
     res.render("auth/login");
  },

  loginUser: async (req, res) => {
    const user = await userService.authenticateUser(req.body);
    if (!user) {
      req.flash("error", "User not found");
      return res.redirect("/auth/login");
    }
    req.session.userId = user._id;
    req.flash("success", "Welcome back!");
    res.redirect("/list/listing");
  },

  logout: async(req, res) => {
   await  req.session.destroy(() => res.redirect("/"));
  }
};

module.exports = authController;