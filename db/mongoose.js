const mongoose = require('mongoose')

mongoose.Promise = global.Promise
const DB_URL = process.env.DB_URL || 'mongodb://admin:admin123@localhost:27017/node-express-adminlte';

mongoose.connect(DB_URL).then(
    ()=> {console.log("Database Connected..")},
    err => {console.log("err",err)}
)

mongoose.exports = {mongoose}