const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../models/user')

router.post('/reg', (req, res) => {
    let newUser = new User({
        name: req.body.name,
        email:req.body.email,
        login:req.body.login,
        password:req.body.password
    });
    User.adduser(newUser, (err, user) => {
        if(err) {
            res.json({success: false, msg: "User has not been Added."})
        } else {
            res.json({success: true, msg: "User has been Added."})
        }
    })
});

router.get('/auth', (req, res) => {
    res.send(`Login page`)
});

router.get('/dashboard', (req, res) => {
    res.send(`Dashboard`)
});

module.exports = router;