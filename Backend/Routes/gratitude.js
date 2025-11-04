const express = require('express');
const Gratitude = require('../Models/Gratitude'); // Model import
const router = express.Router();

// Get all gratitude entries
router.get('/', async (req, res) => {
    try {
        const entries = (await Gratitude.find()).toSorted({ createdAt: -1 });
        res.json({
            message: 'Success!',
            data: entries
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching entries', error: error.message });
    }
});

// Post new gratitude entry
router.post('/', async (req, res) => {
    try {
        const { text } = req.body;

        if (!text) {
            return res.status(400).json({ message: 'Text is required' });
        }
        // Create and save to Mongodb
        const newEntry = new Gratitude({ text });
        await newEntry.save();

        res.json({
            message: 'Gratitude entry successfully added!',
            data: newEntry
        });
    } catch (error) {
        res.status(500).json({ message: 'There was an error adding entry, please try again!', error: error.message });
    }
});

// Delete a gratitude entry
router.delete('/:id', async (req, res) => {
  try {
    await Gratitude.findByIdAndDelete(req.params.id);
    res.json({ message: 'Entry deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting entry', error: error.message });
  }
});

module.exports = router;
