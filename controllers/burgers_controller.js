var burger = require("../models/burger.js");
var express = require("express");
var router = express.Router();


// Create the routes and associated logic
router.get('/', function(req, res) {
  burger.selectAll(function(data) {
    var burgerObject = {
      burgers: data
    };
    // console.log(hbsObject);
    res.render('index', burgerObject);
  });
});

router.post("/burgers/:id", function (req, res) {
    var condition = req.params.id;
    burger.update(condition, function(data) {
        console.log("In update");
        res.redirect('/');
      });
});
module.exports = router;