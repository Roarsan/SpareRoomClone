const ListModel = require('../models/listModel');
const ExpressError = require('../utils/ExpressError');

const listController = {
  // Get all listings
  getAllListings: async (req, res) => {
    const listings = await ListModel.find();
    res.render('listings/listings', { listings });
  },

  // Get a single listing
  showListingDetails: async (req, res) => {
    const list = await ListModel.findById(req.params.id);
    res.render('listings/listingDetail', { list });
  },

  // Render "Create listing" form
  newListing: async (req, res) => {
    res.render('listings/createlisting');
  },

  // Create new listing
  createListing: async (req, res) => {
    const { title, image, address, price, description } = req.body;
    const list = new ListModel({ title, image, address, price, description });
    if(!req.body.list){
      throw new ExpressError(400,"send valid data");
    }
    await list.save();
    res.redirect('/list');
  },

  // Render "Update listing" form
  editListing: async (req, res) => {
    const requestedList = await ListModel.findById(req.params.id);
    res.render('listings/updatelisting', { requestedList });
  },

  // Update listing
  updateListing: async (req, res) => {
    const { title, image, address, price, description } = req.body;
    await ListModel.findByIdAndUpdate(req.params.id, {
      title, image, address, price, description
    });
    res.redirect(`/list/${req.params.id}`);
  },

  // Delete listing
  deleteListing: async (req, res) => {
    await ListModel.findByIdAndDelete(req.params.id);
    res.redirect('/list');
  }
};

module.exports = listController;
