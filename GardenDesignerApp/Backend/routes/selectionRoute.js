// routes/selectionRoutes.js
const express = require('express');
const router = express.Router();
const Selection = require('../models/SelectionRoutes');

// Add middleware to parse JSON-encoded bodies
router.use(express.json());

router.post('/selections', async (req, res) => {
  try {
    const { plants } = req.body;
    const newSelection = new Selection({ plants });
    await newSelection.save();
    res.status(201).send('Selection saved successfully!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving selection');
  }
});

module.exports = router;

