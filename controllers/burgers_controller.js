const burger = require("../model/burger");

const express = require("express");
const router = express.Router();

router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burger: data
        };
        res.render("index", hbsObject)
    })
});

router.post("/form", function(req, res){
    
    burger.create(req.body.name, function(result){
        
        res.json({ id: result.insertId });
    })
});
module.exports = router;