const mongoose = require('mongoose');
const formSchema = new mongoose.Schema({
    name: {
      type: String,
      required: function() { return !this.googleId; },
      minlength: 5,
      maxlength: 50
    },
    message: {
      type: String,
      required: true,
      minlength: 5
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate: {
          validator: (value) => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value),
          message: 'Invalid email format',
      },
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

  
const Form = mongoose.model('Form', formSchema);
  
module.exports = {Form};
  