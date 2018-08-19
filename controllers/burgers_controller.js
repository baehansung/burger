var express = require("express");
var router = express.Router();

//Importing the burger.js from the models folder to use its database functions
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});

router.post('/burgers', function(req, res){
    burger.insertOne(['burger_name'], [req.body.burger_name], function(data){
      res.redirect('/');
    });
  });

router.put('/burgers/:id', function(req, res) {
    burger.updateOne([req.body.devoured], [req.params.id], function() {
        res.redirect('/');
    });
});

//Export routes for server.js to use
module.exports = router;