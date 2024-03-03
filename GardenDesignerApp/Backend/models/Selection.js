// models/Selection.js
const mongoose = require('mongoose');

const selectionSchema = new mongoose.Schema({
  plants: [{ type: String, required: true }],
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Selection', selectionSchema);
