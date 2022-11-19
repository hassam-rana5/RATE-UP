const express = require('express')
const router = express.Router();
const University = require('../models/Universities')

router.get("/getalluniversities", async(req,res)=>{
    try{
        const universities = await University.find({})
        return res.send(universities);
    }
    catch(error){
        return res.status(400).json({message: error});
    }
});
module.exports = router