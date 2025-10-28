const List = require("../models/listModel");

module.exports = async function isOwner(req, res, next) {
    const { id } = req.params;
    const list = await List.findById(id);

    if ( String(list.owner) !== String(req.session.userId)) {
      req.flash("error", "Not authorized to modify this listing");
      return res.redirect(`/list/${id}`);
    }
    // User is authorized, continue
    next();

};