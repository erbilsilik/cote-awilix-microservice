const mongoose = require('mongoose');

const { Schema } = mongoose;

const User = new Schema({
  name: { tr: { type: String }, en: { type: String } },
  phoneNumber: { type: String },
});

module.exports = () => mongoose.model('User', User);
