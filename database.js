const mongoose = require('mongoose');
const config = require('config');

mongoose.connect(`${ config.get('dbConfig.host') }${ config.get('dbConfig.port') }${ config.get('dbConfig.dbName') }`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    connectTimeoutMS: 5000
})
.then(() => console.log('Connected to mongoDB...'))
.catch(err => {
    console.log('Connect error: ', err)
    throw new Error('Connect mongoose - mongoDB error')
});

module.exports = mongoose;