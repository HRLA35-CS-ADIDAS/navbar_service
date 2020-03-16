const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const adidasSchema = new mongoose.Schema({
    name: String,
    color: String,
    type: String,
    price: Number
  });

const Items = mongoose.model('Items', adidasSchema);

module.exports = Items;