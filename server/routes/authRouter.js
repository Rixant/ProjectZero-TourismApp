const express = require('express');
const mongoose  = require('mongoose');

const router = express.Router();
const User = mongoose.model('User');


router.post('/signup', async (req, res) => {
    console.log(req.body)

    try{
        const {email, password} = req.body;
        const user = new User({email, password});
        await user.save();
    }
    catch(err){
        res.status(422).send(err.message)
    }

    res.send("User Registration Successfull!")
})

module.exports = router