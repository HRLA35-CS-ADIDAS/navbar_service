const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/sample_adidas_data', {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = db;