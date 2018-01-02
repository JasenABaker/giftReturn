const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const methodOverRide = require('method-override')




const app = express()





app.set('view engine', 'hbs')
app.use(methodOverRide('_method'))



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const userController = require('./controllers/userController')
app.use('/users', userController)

const storeController = require('./controllers/storeController')
app.use('/users/:userid/stores', storeController)

app.use(express.static('public'))



// Mongo connection set-up
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/gift-returns')

mongoose.connection.once('open', () => {
    console.log('Mongoose has connected to MongoDB!')
})

mongoose.connection.on('error', (error) => {
    console.error(`
    MongoDB connection error!!! 
    ${error}`)
    process.exit(-1)
})

const PORT = process.env.PORT || 4000
app.listen(PORT, function () {
    console.log(`app is listening on port: ${PORT}`)
})