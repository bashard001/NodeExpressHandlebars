const connection = require("./connection")

const orm = {
    all: function(tableInput, cb){
        var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
    },
    create: function(table, cols, vals, cb){
        var queryString = "insert into"+ table;


    },

    update: function(){}
};

module.exports = orm;