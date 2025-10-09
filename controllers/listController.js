const ListModel = require('../models/listModel');

const listController = {
  // Get all listings
  getAllListings: async (req, res) => {
    try {
      const listings = await ListModel.find();
      res.render('listings/listings', { listings });
    } catch (error) {
      console.error('Error fetching listings:', error);
      res.status(500).send("Error fetching listings");
    }
  },
  // Get a single listing
  showListing: async (req, res) => {
   try { 
    const list = await ListModel.findById(req.params.id);
    res.render('listings/listingDetail', { list });
  } catch (error){
    console.error('Error fetching listing:', error);
    res.status(500).send("Error fetching listing");
  }
  },
  // 🟢 Render "Create new listing" form
  newListing: async (req, res) => {
    try {
      res.render('listings/newlisting');
    } catch (error) {
      console.error('❌ Error rendering new listing form:', error.message);
      res.status(500).send("Unable to load new listing form.");
    }
  },

  // Handle new listing creation
  createListing: async (req, res) => {
    try {
      const { title, image, address, price } = req.body;
      const list = new ListModel({ title, image, address, price });
      await list.save();
      res.redirect('/list');
    } catch (error) {
      console.error('❌ Error creating listing:', error.message);
      res.status(400).send("Invalid input or server error while creating listing.");

    }
  },

  // Render "Edit listing" form
  editListing: async (req, res) => {
    try {
      const list = await ListModel.findById(req.params.id);

      if (!list) {
       return res.status(404).send("Listing not found for editing.");
        
      }

      res.render('listings/editlisting', { list });
    } catch (error) {
      console.error('❌ Error fetching listing for edit:', error.message);
      res.status(500).send("Server error: unable to fetch listing for editing");
    }
  },
  updateListing: async (req, res) => {
    try {
      const { title, image, address, price } = req.body;
      await ListModel.findByIdAndUpdate(req.params.id, { title, image, address, price });
      res.redirect(`/list/${req.params.id}`);
    } catch (error) {
      console.error("Error updating listing:", error);
      res.status(500).send("Error updating listing");
    }
  }
  
};

module.exports = listController;
