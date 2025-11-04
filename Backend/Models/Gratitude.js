const mongoose = require('mongoose');

// Schema for gratitude entries
const GratitudeSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true 
});

// Create and export the model
module.exports = mongoose.model('Gratitude', GratitudeSchema);