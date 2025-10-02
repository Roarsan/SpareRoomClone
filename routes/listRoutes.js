const express = require('express');
const router = express.Router();
const listController = require('../controllers/listController');

// GET /list - Show all listings
router.get('/', listController.getAllListings);


module.exports = router;
