const express = require('express');
const path = require('path');
const morgan = require('morgan');
const controller = require('./controller.js');
const http = require('http')
const fs = require('fs');
const port = 8001;
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')))

app.get('/search', controller.getAll);
// app.get('/style.css', (req, res) => {
//     fs.readFile('client/dist/style_01.css', (err, data) => {
//         if (err) throw err;
//         res.writeHead(200, {'content-type': 'text/css'});
//         res.send('hi');
//     });
// })

// app.get('/styles.css', (req, res) => {
//     fs.readFile('client/dist/style_01.css', (err, data)=>{
//         res.writeHeader(200, {'Content-Type': 'text/css'});
//         // res.send(data);
//         res.write(data);
//         res.end();
//     });
// })


app.listen(port, ()=>{console.log(`Listening in on port ${port}`)})