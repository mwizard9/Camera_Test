const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://Mwizard:maxweLL11!!@cameratest.cqtfls2.mongodb.net/CameraTest?retryWrites=true&w=majority"


const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("connected to mongo successfully");
    })
}

module.exports = connectToMongo;