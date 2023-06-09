const mongoose = require('mongoose');
const { Schema } = mongoose;

// Device Schema
const DeviceSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  standard: {
    
      type: Number,
      default: 1000
   
  },
  portrait: {
    
      type: Number,
      default: 1000
    
  }
});

const Device = mongoose.model('Device', DeviceSchema);

module.exports = Device;