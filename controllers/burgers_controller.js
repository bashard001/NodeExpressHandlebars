const burger = require("../model/burger");
const router = express.Router();
const express = require("express");

router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burger: data
        };
        res.render("index", hbsObject)
    })
})

module.exports = router;