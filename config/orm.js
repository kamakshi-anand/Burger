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
//***************************************************************************************************************** */
  insertOne: function (id, callback) {
    //var queryString = "INSERT INTO " + table;
    // connection.query("SELECT * FROM burgers;", function (err, data) {
    //   if (err) {
    //     return res.status(500).end();
    //   }

    //   res.render("index", { burgers: data });
    // });

  },

  addBurger: function (name, callback) {
    
    var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
    console.log("Query is " + queryString);
    //	Perform the database query
    connection.query(queryString,[name],function (err, result) {
      console.log("Inside query");
      if (err) {
        // If an error occurred, send a generic server failure
         return result.status(500).end();
        console.log("Inside error"+err);
      }
     

      // Return results in callback
      callback(result);
    });

  },

  updateBurger: function (id, flag,callback) {
    var queryString = "UPDATE burgers SET devoured = ? WHERE id = ?";
    console.log("Query is " + queryString);
    //	Perform the database query
    connection.query(queryString, [flag,id],function (err, result) {
      if (err) {
        // If an error occurred, send a generic server failure
        //  return result.status(500).end();
      }
      else if (result.changedRows === 0) {
        console.log("Didn't change anything");
        // If no rows were changed, then the ID must not exist, so 404
        // callback(result);
      }

      // Return results in callback
      callback(result);
    });

  },



};

module.exports = orm;