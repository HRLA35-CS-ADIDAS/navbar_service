const db = require('./database/database.js');

module.exports = {
    getAll: () => db.find({})
}