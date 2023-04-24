const mongoose = require('mongoose');
const { Schema } = mongoose;

const ImageSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    image:{
        data:Buffer,
        contentType: String
        
    },
    date:{
        type: Date,
        default:Date.now
    },
  });
  module.exports = ImageModel= mongoose.model('imagemodel', ImageSchema);