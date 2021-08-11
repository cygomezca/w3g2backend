const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dbUser:w3123456@cluster0.tld9e.mongodb.net/test', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:false
    })
        .then(db => console.log('DB is connected'))
        .catch(err => console.error(err));

module.exports = mongoose;
