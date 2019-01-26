var express = require('express');
var burger = require('../models/burger.js');
var router = express.Router();


router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        res.render('index', { burgers: data });
    });
})

router.post("/api/burgerName", function(req, res) {
    console.log(req.body);
    var burgerName = req.body.burgerName;
    var columnName = "burger_name"
    console.log("burger name is: " + burgerName);
    burger.insertOne(columnName, burgerName, function(data) {
        res.redirect("/")
    })
})

router.put("/api/:burgerId", function(req, res) {
    console.log("burgerID: " + req.params.burgerId)
    var burgerId = req.params.burgerId
    burger.updateOne(burgerId, function(data) {
        res.json(data);
    })
})

module.exports = router;