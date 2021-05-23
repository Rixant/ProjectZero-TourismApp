const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
        unique: true
    },
    comment: {
        type: String,
        required: true
    },
    rating:  {
        type: Number,
        min: 1,
        max: 5,
        required: true
    }
},
    {
    timestamps: true
});

mongoose.model('Review', reviewSchema);

