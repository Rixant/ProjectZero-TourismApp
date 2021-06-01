const express = require('express');
const mongoose  = require('mongoose');

const router = express.Router();
const Host = mongoose.model('Host');



/** GET ALL HOSTS */
router.get('/hosts',async(req, res) => {
    try{
    const hosts = await Host.find();
    res.json(hosts)
    }
    catch(err){
        res.send(err.message)

    }
});//end get



/** GET HOST BY ID */
router.get('/hosts/:hostId',async(req, res) => {
    try{
        const host = await Host.findById(req.params.hostId)
        res.json(host)
    }
    catch(err){
        res.send(err.message)

    }
});//end getByID



/** POST HOST */
router.post('/host/post', async (req, res) => {
    console.log(req.body)


    const host = new Host({
        name : req.body.name,
        location : req.body.location,
        description : req.body.description,
        rating : req.body.rating,
        price : req.body.price

    });

    try{
        const savedHost = await host.save();
        res.json(savedHost);
    }
    catch(err){
        res.status(422).send(err.message);
    }

    res.send("User Registration Successfull!")
})//end post


/** DELETE HOST */
router.delete('/host/:hostId', async (req, res) => {
    
    try{
        const removedHost = await host.remove({_id : req.params.hostId });
        res.json(removedHost)}
    catch(err){
        res.json(err.message)
    }
})//end delete


/** UPDATE HOST */
router.patch('/host/:hostId', async (req, res) => {
    
    try{
        const updateHost = await Host.updateOne({_id : req.params.userId }, 
                                                { $set: { name : req.body.name }},
                                                { $set: { location : req.body.location }},
                                                { $set: { description : req.body.description }},
                                                { $set: { rating : req.body.rating }},
                                                { $set: { price : req.body.price }}
                                     );
         res.json(updateHost)

    }
    catch(err){
        res.json(err.message)
    }
})//end update


module.exports = router;