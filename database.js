const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dbrestaurante', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

    module.exports = mongoose;