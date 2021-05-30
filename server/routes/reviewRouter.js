const express = require('express');
const mongoose  = require('mongoose');

const router = express.Router();
const Review = mongoose.model('Review');

/** GET ALL REVIEWS */
router.get('/reviews',async(req, res) => {
    try{
    const reviews = await Review.find();
    res.json(reviews)
    }
    catch(err){
        res.send(err.message)

    }
});


/** GET REVIEW BY ID */
router.get('/:reviewId',async(req, res) => {
    try{
        const review = await Review.findById(req.params.reviewId)
        res.json(review)
    }
    catch(err){
        res.send(err.message)

    }
});


/** POST REVIEW */
router.post('/review/post', async (req, res) => {
    console.log(req.body)


    const review = new Review({
        author : req.body.author,
        comment : req.body.comment,
        rating : req.body.rating

    });

    try{
        const savedReview = await review.save();
        res.json(savedReview);
    }
    catch(err){
        res.status(422).send(err.message);
    }

    res.send("User Registration Successfull!")
})


/** DELETE REVIEW */
router.delete('/review/:reviewId', async (req, res) => {
    
    try{
        const removedReview = await Review.remove({_id : req.params.reviewId });
        res.json(removedReview)}
    catch(err){
        res.json(err.message)
    }
})


/** UPDATE REVIEW */
router.patch('/review/:reviewId', async (req, res) => {
    
    try{
        const updateReview = await Review.updateOne({_id : req.params.userId }, 
                                                { $set: { comment : req.body.comment }},
                                                { $set: { rating : req.body.rating }},

                                     );
         res.json(updateReview)

    }
    catch(err){
        res.json(err.message)
    }
})


module.exports = router;