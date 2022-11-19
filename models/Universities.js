const mongoose = require('mongoose')
const { double } = require('webidl-conversions')

const Universityschema = mongoose.Schema({

    name :{
        type: String,
        required: true
    },
    campus:{
        type: String,
        required: true
    }
    ,
    address:{
        type: String,
        required: true
    },
    phoneno:{
        type: String,
        required: true
    },
    imageurl: [],
    currentRating:{
        type: Number,
        required: true
    }
},{
    timestamps : true,
    })

    const universityModel = mongoose.model('Universities', Universityschema)
    module.exports = universityModel
