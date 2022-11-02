const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const connectionString = process.env.CONNECTION_STRING
const connectDb =async ()=>{
   await mongoose.connect(connectionString)
    console.log('connected to database')
}
//('mongodb+srv://Anthony:t0pyn0123@cluster0.rfnqkhg.mongodb.net/?retryWrites=true&w=majority')
module.exports = connectDb