var express = require('express')
var router = express.Router();
let Verdict = require("./public/models/verdict");
let User = require("./public/models/user");
let Picture = require("./public/models/picture");

router.route("/getVerdictWithPictureId").post(function(req, res){
    Verdict.find({pictureId: req.body.pictureId},function(err,listOfVerdicts){
        res.json(listOfVerdicts);
    })
});
router.route("/postVerdict").post(function(req,res){
    let verdict = new Verdict();
    verdict.comment = req.body.comment;
    verdict.commenter = req.body.commenter;
    verdict.thumbsUp = req.body.thumbsUp;
    verdict.pictureId = req.body.pictureId;
    verdict.save();
    res.redirect("/");
});
router.route("/postUser").post(function(req,res){
    let user = new User();
    user.username=req.body.username;
    user.setPassword(req.body.password);
    user.profilePic=req.body.profilePic;
    
    user.save((err) => {
        if (err) {
            alert('Username already exists')
        }
    });
    res.redirect("/");
});

router.route("/login").post(function(req,res){
   let username = req.body.username
   let password = req.body.password
   User.findOne({username: username}, function(err , user){
       if(err){
           console.log('User does not exist.')
           res.send({inloggad: false});
       }
       else{
           if(!user.validPassword(password)){
               console.log("Wrong password.");
               res.send({inloggad: false});
           }else{
               res.send({
                   inloggad: true,
                   userId: user.userId
               });
               console.log(username+" logged in.");
           }
       }
    });
});

router.route("/addProfilePic").post(function(req,res){
    let id = req.body.userId;
    User.findOneAndUpdate({userId:id},function(err,user){
        user.profilePic=req.body.profilePic;
        user.save();
        res.redirect("/");
    });
});
router.route("/addUserPagePicture").post(function(req,res){
    let picture = new Picture();
    picture.picture=req.body.picture;
    picture.userId=req.body.userId;
    picture.caption=req.body.caption;
    picture.save();

    User.findOneAndUpdate({userId:req.body.userId},function(err,user){
        console.log("pictureid: "+picture.pictureId);
        let usersPictures = user.pictureIds;
        user.pictureIds = usersPictures.push(picture.pictureId);
        user.save();
    });
    res.redirect("/");


});
router.route("/getUsersPictures").post(function(req,res){
    Picture.find({userId:req.body.userId},function(err,listOfPictures){
        res.json(listOfPictures);
    })
});

router.route("/getUserWithId").post(function(req,res){
    console.log("/getUsersPictureIds - function called");
    User.findOne({userId:req.body.userId},function(err,user){
        console.log("picture ids for user: "+req.body.userId);
        console.log(user);
        res.json(user);
    })
});

router.route("/getPicturesWithUserId").post(function(req,res){
    Picture.find({userId:req.body.userId},function(err,pictures){
        res.json(pictures);
    })
});

router.route("/getUsers").get(function(req,res){
    User.find({},function(err,listOfUsers){
        res.json(listOfUsers);
    })
});

router.route("/postPicture").post(function(req,res){
    let picture = new Picture();
    picture.picture=req.body.picture;
    picture.userId=req.body.userId;
    picture.caption=req.body.caption;
    picture.save();
    res.redirect("/"); 
});
module.exports = router;