const express = require('express');
const mongoose  = require('mongoose');

const router = express.Router();
const User = mongoose.model('User');



/** GET ALL USERS */
router.get('/users',async(req, res) => {
    try{
    const users = await User.find();
    res.json(users)
    }
    catch(err){
        res.send(err.message)

    }
});//end get



/** GET USER BY ID */
router.get('/:userId',async(req, res) => {
    try{
        const user = await User.findById(req.params.userId)
        res.json(user)
    }
    catch(err){
        res.send(err.message)

    }
});//end getByID



/** POST USER */
router.post('/user/signup', async (req, res) => {
    console.log(req.body)


    const user = new User({
        email : req.body.email,
        password : req.body.password
    });

    try{
        const savedUser = await user.save();
        res.json(savedUser);
    }
    catch(err){
        res.status(422).send(err.message);
    }

    res.send("User Registration Successfull!")
})//end post



/** DELETE USER BY ID */
router.delete('/user/:userId', async (req, res) => {
    
    try{
        const removedUser = await User.remove({_id : req.params.userId });
        res.json(removedUser)}
    catch(err){
        res.json(err.message)
    }
})//end delete



/** UPDATE USER INFO */
router.patch('/user/:userId', async (req, res) => {
    
    try{
    const updateUser = await User.updateOne({_id : req.params.userId }, { $set: { email : req.body.email}},
        { $set: { password : req.body.password}}

    );
    res.json(updateUser)

    }
    catch(err){
        res.json(err.message)
    }
})//end update


module.exports = router