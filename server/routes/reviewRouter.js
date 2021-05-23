const express = require('express');
const mongoose  = require('mongoose');

const router = express.Router();
const Review = mongoose.model('Review');


router.post('/reviews', async (req, res) => {
    console.log(req.body)

    try{
        const {author, comment, rating, timestamps} = req.body;
        const review = new Review({author, comment, rating, timestamps});
        await review.save();
    }
    catch(err){
        res.status(422).send(err.message)
    }

    res.send("Review Post Successful")
})

module.exports = router