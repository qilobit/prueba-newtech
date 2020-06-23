const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const contactSchema = new Schema({
  
  name: { type: String, required: true, unique: true },
  phones: { type: Array }

});

module.exports = mongoose.model('Contact', contactSchema);
