// const faker = require('faker');
// const Items = require('./database.js');
// const dataB = require('./index.js');
// const mongoose = require('mongoose');

// let generateData = () => {
//     let arr = [];
//     for(let i = 0; i < 100; i++){
//         arr.push({
//             name: faker.commerce.productName(),
//             color: faker.commerce.color(),
//             department: faker.commerce.department(),
//             price: faker.commerce.price()
//         })
//     }
//     return arr;
// }
// let adidasData = generateData();
// // let db = mongoose.connection
// const insertAdidasData = function() {
//     Items.create(adidasData)
//       .then(() => mongoose.connection.close())
//       .catch((err)=>console.log(err));
// };
  
// insertAdidasData();

// // console.log(faker.commerce.productAdjective())

