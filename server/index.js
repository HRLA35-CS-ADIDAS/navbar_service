const express = require('express');
const path = require('path');
const morgan = require('morgan');
const controller = require('./controller.js');
const port = 8001;
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')))


app.listen(port, ()=>{console.log(`Listening in on port ${port}`)})