const mongoose = require('mongoose');
const config = require('config');

mongoose.connect('mongodb://localhost/dbrestaurante', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:false
    })
        .then(db => console.log('DB is connected'))
        .catch(err => console.error(err));

module.exports = mongoose;
