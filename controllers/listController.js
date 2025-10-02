const ListModel = require('../models/listModel');

const listController = {
  // Get all listings
  getAllListings: async (req, res) => {
    try {
      const listings = await ListModel.find();
      res.render('listings/index', { listings });
    } catch (error) {
      console.error('Error fetching listings:', error);
      res.status(500).send('Error fetching listings');
    }
  }
};

module.exports = listController;
