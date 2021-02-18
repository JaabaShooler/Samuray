const express = require("express");
const mg = require("mongoose")
const config = require("./config/app")

//models
require('./api/models/user')

const app = express();



require('./config/express')(app);
require('./config/routes')(app);

app.use('/assets/img/avatars', express.static(`${__dirname}/assets/img/avatars`))


async function start(){
    try{
        mg.connect(config.mongoUri,{useNewUrlParser: true,useUnifiedTopology: true })
        console.log("DB connected");
        app.listen(config.appPort, console.log(`Server has been started on port ${config.appPort}... `));
    }catch (e){
        console.log(e);
    }
}

start();


