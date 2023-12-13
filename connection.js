const mongoose = require('mongoose')

const connectToDb = (url)=>mongoose.connect(url)
.then(()=>console.log("connect to db"))
.catch((err)=>console.log(err))

module.exports = connectToDb;