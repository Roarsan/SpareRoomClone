// services/listService.js
const ListModel = require('../models/listModel');

// Get all listings
const getAllListings = async () => {
  return await ListModel.find();
};

// Get one listing by ID
const getListingById = async (id) => {
  return await ListModel.findById(id);
};

// Create a new listing
const createListing = async (data) => {
  const newList = new ListModel(data);
  return await newList.save();
};

// Update an existing listing
const updateListing = async (id, data) => {
  return await ListModel.findByIdAndUpdate(id, data, { new: true });
};

// Delete a listing
const deleteListing = async (id) => {
  return await ListModel.findByIdAndDelete(id);
};

module.exports = {
  getAllListings,
  getListingById,
  createListing,
  updateListing,
  deleteListing,
};
