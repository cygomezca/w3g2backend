//Initializations
const app = require('./app');
require('./database');


// Settings
app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'))
});