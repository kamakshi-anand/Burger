var orm = require("../config/orm.js");

var burger = {
    // Select all burger table entries
    selectAll: function(callback) {
      orm.selectAll(function(res) {
        callback(res);
      });
    },
  
    // // The variables cols and vals are arrays
    // insertOne: function(cols, vals, cb) {
    //   orm.insertOne('burgers', cols, vals, function(res) {
    //     cb(res);
    //   });
    // },
  
    // The objColVals is an object specifying columns as object keys with associated values
    update: function(id,cb) {
      orm.updateBurger(id,function(res) {
        cb(res);
      });
    }
  };
  module.exports = burger;