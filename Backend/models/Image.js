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
    category: {
        type: String, // Change the data type to String
        enum: ['selfie', 'standard', 'portrait'],
        default: 'standard'
      }
  });
  module.exports = ImageModel= mongoose.model('imagemodel', ImageSchema);