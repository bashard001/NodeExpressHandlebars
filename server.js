const express = require("express")
const mysql = require("mysql")
const exphbs = require("express-handlebars");

const app = express()

const port = process.env.PORT || 3000;




app.listen(port, function(err){
    if (err) throw err;
    console.log("you are connected on port"+ port)
})
