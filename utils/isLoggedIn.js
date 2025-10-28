module.exports = function isLoggedIn(req, res, next) {
    if (!req.session || !req.session.userId) {
      req.flash("error", "You must be signed in!");
      return res.redirect("/auth/login");
    }
    next();
  };