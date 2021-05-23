const express = require('express');
const mongoose  = require('mongoose');

const router = express.Router();
const Host = mongoose.model('Host');


router.post('/hosts', async (req, res) => {
    console.log(req.body)

    try{
        const {name, location , price} = req.body;
        const host = new Host({name, location, price});
        await host.save();
    }
    catch(err){
        res.status(422).send(err.message)
    }

    res.send("Host Registration Successfull!")
})

module.exports = router