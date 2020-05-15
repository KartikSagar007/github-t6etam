const mongoose = require('mongoose');
 
const Schema = mongoose.Schema; //here we got a instance of mongoose schema
//data or a document in mongodb is representated as a JS OBJ. Schema is the blueprint of the OBJ in the DB
const videoSchema = new Schema({
    title: String,
    url: String,
    description: String
});
module.exports = mongoose.model('video',videoSchema,'videos');
//video is name of the model, videoschma is schema to be represented, videos is the mongodb collection name. 