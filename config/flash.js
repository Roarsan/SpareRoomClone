const flash = require('connect-flash');

function setupFlash(app) {
  // Initialize connect-flash
  app.use(flash());

  // Make flash messages available globally to all views
  app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currentUser = !!req.session.userId;
    next();
  });
}

module.exports = setupFlash;
