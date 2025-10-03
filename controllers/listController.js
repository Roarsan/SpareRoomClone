const ListModel = require('../models/listModel');

const listController = {
  // Get all listings
  getAllListings: async (req, res) => {
    try {
      const listings = await ListModel.find();
      res.render('listings/listings', { listings });
    } catch (error) {
      console.error('Error fetching listings:', error);
      res.status(500).send('Error fetching listings');
    }
  },
  // Get a single listing
  showListing: async (req, res) => {
   try { 
    const list = await ListModel.findById(req.params.id);
    res.render('listings/listDetail', { list });
  } catch (error){
    console.error('Error fetching listing:', error);
    res.status(500).send('Error fetching listing');
  }
  }
};

module.exports = listController;
