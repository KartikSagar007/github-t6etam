const express = require('express');
const router = express.Router(); //get a hold of express router
const mongoose = require('mongoose');
const Video = require('../models/video');

// const db = "mongodb://sagar:sagar@123@ds249757.mlab.com:49757/videoplayer"; //videoplayer is db name n videos is collection name
const db = "mongodb://ds249757.mlab.com:49757/videoplayer"; //videoplayer is db name n videos is collection name
// const db = "mongodb://sagar:${encodeURIComponent('sagar@123')}@ds249757.mlab.com:49757/videoplayer";

//for any incoming request we gonna send back a string

mongoose.Promise = global.Promise; //just to avoid any warnings that mongoose is going to throw at us.
/* mongoose.connect(db, function(err){
    if(err){
        console.error("ERROR OCCURED:  "+ err);
    }
    else{console.log("mongo connection successful!");}
}); */
mongoose.connect(db,
    {user: 'sagar', pass: 'sagar@123'},
    function(err){
        if(err){
            console.error("ERROR OCCURED:  "+ err);
        }
        else{console.log("mongodb connection successful!");}
}); 

//for default api
router.get('/',function(req,res){
    console.log("localhost:3000/api called");
    res.send("only /api is called");
});

//to get all videos
router.get('/videos',function(req,res){
    console.log("get request for all videos");
    Video.find({})
    .exec(function(err,videos){
        if(err){
            console.log("error encountered while retrieving videos");
        }else{
            res.json(videos);
        }

    })
});

//to get one video
router.get('/videos/:id',function(req,res){
    console.log("get request for single video");
    Video.findById(req.params.id)
    .exec(function(err,videos){
        if(err){
            console.log("error encountered while retrieving videos");
        }else{
            res.json(videos); console.log('video title: '+ videos.title);
        }

    })
});

//to add new videos
router.post('/videos',function(req,res){
    console.log("post a new video");
    var newVideo = new Video();
    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;
    newVideo.save(
    function(err,videos){
        if(err){
            console.log("error while saving videos");
        }else{
            res.json(videos);
        }
    });
});

//to update any video
router.put('/videos/:id',function(req,res){
    console.log('Update a video');
    Video.findByIdAndUpdate(req.params.id,
    {
        $set: {title: req.body.title, url: req.body.url, description:req.body.description}
    },{
        new: true
    },function(err,updatedVideo){
        if(err){res.send('error updating video');}
        else{res.json(updatedVideo);}
    }
    );
})

//to delete any video
router.delete('/videos/:id',function(req,res){
    console.log('delete a video');
    Video.findByIdAndRemove(req.params.id,function(err,deletedVideo){
        if(err){
            res.send("error deleting video");
        }else{res.json(deletedVideo);}
    });
});

// export router
module.exports = router;