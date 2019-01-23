var express = require('express');
var burger = require('../models/burger.js');
var router = express.Router();


router.get("/", function(req, res) {
    burger.selectAll(function(err, data) {
        if (err) throw err;
        res.render('index', { burgers: data });
    });
})

router.post("/api/:burgerName", function(req, res) {
    console.log(req.body);
    var burgerName = req.body.burgerName;
    console.log("burger name is: " + burgerName);
    burger.insertOne(burgerName, function(err, data) {
        if (err) throw err;
        res.redirect("/")
    })
})

module.exports = router;