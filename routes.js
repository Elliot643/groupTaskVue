var express = require('express')
var router = express.Router();
let Verdict = require("./public/models/verdict");
let User = require("./public/models/user");
let Picture = require("./public/models/picture");

router.route("/getAllVerdicts").get(function(req, res){
    Verdict.find({},function(err,listOfVerdicts){
        res.json(listOfVerdicts);
    })
});
router.route("/postVerdict").post(function(req,res){
    let verdict = new Verdict();
    verdict.comment = req.body.comment;
    verdict.commenter = req.body.commenter;
    verdict.thumbsUp = req.body.thumbsUp;
    verdict.pictureId = req.body.pictureId;
    console.log(verdict);
    verdict.save();
    res.redirect("/");
});
module.exports = router;