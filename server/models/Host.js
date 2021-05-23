const mongoose = require('mongoose');

const hostSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    location: {
        type: String,
        required : true
    },
    price: {
        type: Number,
        required: true
    }

})

mongoose.model('Host', hostSchema);