const express = require('express')
const router = require(`./src/router/friendsRouter`)
const dotenv = require('dotenv')
dotenv.config()
const {logger, sayHi
} = require(`./src/middleware/logger`)
const connectDb = require('./src/Config/config')
const { connect } = require('mongoose')
// const sayHi= require(`./src/middleware/sayHi`)
const app = express()
app.use(express.json())

//middleware


app.get('/', (req, res) =>{
    res.status(200).send('Homepage')
})

app.use(`/data`, router)

const port = process.env.PORT
connectDb();

app.listen(port, ()=>{
    console.log('Server is up and running')
})