const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const methodOverRide = require('method-override')




const app = express()





app.set('view engine','hbs')
app.use(methodOverRide('_method'))



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const userController = require('./controllers/userController')
app.use('/users', userController)

const storeController = require('./controllers/storeController')
app.use('/stores', storeController)

app.use(express.static('public'))



mongoose.connect('mongodb://localhost/giftReturn')
const db = mongoose.connection

db.on('error', function(err){
    console.log(err)
})

db.once('open', function(){
    console.log('Database has been connected!')
})


const PORT = process.env.PORT || 4000
app.listen(PORT, function(){
    console.log(`app is listening on port: ${PORT}`)
})