const List = require("../models/listModel");

module.exports.isLoggedIn = function isLoggedIn(req, res, next) {
    if (!req.session || !req.session.userId) {
      req.flash("error", "You must be signed in!");
      return res.redirect("/auth/login");
    }
    next();
};

module.exports.isOwner = async function isOwner(req, res, next) {
    const { id } = req.params;
    const list = await List.findById(id);

    if ( String(list.owner) !== String(req.session.userId)) {
      req.flash("error", "Not authorized to modify this listing");
      return res.redirect(`/list/${id}`);
    }
    // User is authorized, continue
    next();
};