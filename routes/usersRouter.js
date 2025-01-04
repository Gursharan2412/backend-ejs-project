const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/authController');
const { loginUser } = require('../controllers/authController');

router.get('/', function(req, res){
    res.send('Hey its working...');
});

router.post('/register', registerUser);

router.post('/login', loginUser);


module.exports = router;
