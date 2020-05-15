const express = require('express');
const router = express.Router(); //get a hold of express router

//for any incoming request we gonna send back a string
router.get('/',function(req,res){
    res.send("sagar.js works");
});

// export router
module.exports = router;