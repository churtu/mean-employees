const {connect} = require('mongoose');
const {database} = require('./keys');

connect(database.ULI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => console.log('Database is connected'))
.catch(err => console.log(err));