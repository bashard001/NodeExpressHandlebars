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
    create: function(vals, cb){
        var queryString = `insert into burgers (burger_name) values (?);`;
        connection.query(queryString, vals, function(err, result){
          if (err) {
            throw err;
          }
          cb(result)

        })


    },

    update: function(){}
};

module.exports = orm;