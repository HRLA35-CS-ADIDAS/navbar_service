const models = require('./models.js');

module.exports = {
    getAll: (req, res) => {
        models.getAll()
            .then((results) => res.status(200).send(results))
            .catch((err) => res.status(400).send(err))
    }
}