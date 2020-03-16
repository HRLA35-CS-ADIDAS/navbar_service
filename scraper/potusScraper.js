const rp = require('request-promise');
const fs = require('fs');
const puppeteer = require('puppeteer');
const url = 'https://www.adidas.com/us/women-originals-shoes';

// rp(url)
//   .then(function(html){
//     //success!
//     fs.appendFile('some.html', html, function (err) {
//         if (err) throw err;
//         console.log('Saved!');
//       });
//     // console.log(html);
//   })
//   .catch(function(err){
//     //handle error
//     console.log('FAILURE!!!!!!!')
//   });

puppeteer
  .launch()
  .then(function(browser) {
    return browser.newPage();
  })
  .then(function(page) {
    return page.goto(url).then(function() {
      return page.content();
    });
  })
  .then(function(html) {
    // console.log(html);
    fs.appendFile('some.html', html, function (err) {
    if (err) throw err;
    console.log('Saved!');
    });

  })
  .catch(function(err) {
    //handle error
    console.log('FAILURE')
  });