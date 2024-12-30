const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owner-model');

if(process.env.NODE_ENV === "development"){
    router.post('/create', async function(req, res){
        let owners = await ownerModel.find();
        if(owners.length > 0) {
            return res
               .status(501)
               .send("You don't have permission to create a new owner.");
        }
     
        let { fullname, email, password } = req.body;

        let createdOwner = await ownerModel.create({
            fullname,
            email,
            password,
        });
        res.status(201).send(createdOwner);
        
    });
 }
 
 router.get('/owners', async function (req, res) {
    try {
        let owners = await ownerModel.find(); // Retrieve all owners
        res.status(200).send(owners); // Send them as a JSON response
    } catch (error) {
        res.status(500).send("An error occurred while fetching owners.");
    }
});


router.get('/', function(req, res){
    res.send('Hey its working...');
});

module.exports = router;