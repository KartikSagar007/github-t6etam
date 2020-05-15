const express = require('express'); //express is a server
const helmet = require('helmet');
const bodyParser = require('body-parser'); // is a middle ware to handle form data
const path = require('path');
const api = require('./server/routes/api');
const sagar = require('./server/routes/sagar');
const port = 3000;
const app = express();
console.log("dir name: ",__dirname);
app.use(express.static(path.join(__dirname,'dist'))); //joining the path of the 
//current directory with dist folder..this basically gives express the access to the distributable folder
app.use(helmet());
app.use(helmet({    //not working for in-a-frame-because-it-set-x-frame-options-to-sameorigin-in-node-app
    frameguard:false    //You can disable a middleware that's normally enabled by default. This will disable frameguard but include the other defaults.
}));
app.use(bodyParser.urlencoded({extended:true})); //parses the text as urlencoded data

app.use(bodyParser.json()); //it parses the text as json

app.use('/api',api); //for /api path use api file in routes folder
app.use('/sagar',sagar);

app.get('*',(req,res)=>{    //for any other route than /api the server has to render/send the 
    //index.html page in distributable folder. so now if u write 3000 ..express knows it has to route index.html
res.sendFile(path.join(__dirname,'dist/index.html'));
});
app.listen(port,function(){ //in server.js if listen to requests on 3000
    console.log("server running on localhost:" + port + "(server.js file)"); //if successfull
})

//npm install --save express body-parser 