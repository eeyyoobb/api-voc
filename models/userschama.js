const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  isLogged: {
    type: Boolean,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
    default: 0,
  },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;
