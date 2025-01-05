const express = require('express');
const router = express.Router();
const isloggedin = require('../middlewares/isLoggedIn');
const isLoggedIn = require('../middlewares/isLoggedIn');


router.get('/', function(req, res){
    let error = req.flash('error');
    res.render('index', { error });
});

router.get('/shop', isLoggedIn, function(req, res){
    console.log(products)
    res.render('shop');
});

module.exports = router;