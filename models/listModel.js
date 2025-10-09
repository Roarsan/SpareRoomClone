//model for lists
const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    address: { type: String, required: true },
    price: { type: Number, required: true, min: 0 }
  }, { timestamps: true });

const ListModel = mongoose.model("listSchema",listSchema);
module.exports = ListModel;
  