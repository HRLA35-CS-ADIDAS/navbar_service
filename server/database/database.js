const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/sample_adidas_data', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=> {console.log('Connected to Mongo')})

const adidasSchema = new mongoose.Schema({
    image: String,
    name: String,
    type: String,
    color: String,
    price: String,
    sale_price: String,
    crossed_price: String
  });

const Items = mongoose.model('Items', adidasSchema);

module.exports = Items;