var connection = require("./connection.js");


var orm = {

  // Here our ORM is creating a simple method for performing a query of the entire table.
  // We make use of the callback to ensure that data is returned only once the query is done.
  selectAll: function (callback) {
    var queryString = "SELECT * FROM BURGERS";

    // Perform the database query
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      // Return results in callback
      callback(result);
    });

  },

  // Here our ORM is creating a simple method for performing a query of a single character in the table.
  // Again, we make use of the callback to grab a specific character from the database.

  insertOne: function (id, callback) {


  },

  updateBurger: function (id, callback) {
    var queryString = "UPDATE burgers SET devoured='1' where id="+id;
    console.log("Query is " + queryString);
    //	Perform the database query
    connection.query(queryString,function (err, result) {
      if (err) {
        // If an error occurred, send a generic server failure
      //  return result.status(500).end();
      }
      else if (result.changedRows === 0) {
        console.log("Didnt change anything");
        // If no rows were changed, then the ID must not exist, so 404
       // callback(result);
      }

      // Return results in callback
      callback(result);
    });

  },



};

module.exports = orm;