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
//*************************************************** */
// router.post('/burgers', function(req, res) {
//     burger.insertOne([
//       'burger_name'
//     ], [
//       req.body.burger_name
//     ], function(data) {
//         console.log("insert burger");
//       res.redirect('/');
//     });
//   });

router.post("/burgers/:id/:flag", function (req, res) {
    var flag;
    var burgerId = req.params.id;
    var currentFlag=req.params.flag;
    if (currentFlag == "false"){
        flag=true;
    } else if (currentFlag == "true") {
        flag=false;
    }
    burger.update(burgerId, flag,function(data) {
        console.log("In update");
        res.redirect('/');
      });
});


router.post("/burger/add/", function (req, res) {
    var burgerName = req.body.burger_name;
    console.log("Burger Name is "+burgerName);
    burger.add(burgerName, function(data) {
        console.log("In update");
        res.redirect('/');
      });
});

module.exports = router;