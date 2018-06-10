const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/express-adminlte').then(
    ()=> {console.log("Database Connected..")},
    err => {console.log("err",err)}
)

mongoose.exports = {mongoose}