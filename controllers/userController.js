const express = require('express')
const router = express.Router()


const User = require('../models/user')
const Store = require('../models/store')
const Gift = require('../models/gift')





router.get('/', (req, res) => {
    User.find().then((users) => {
        res.render('users/index', {
            users,
            pageTitle: 'Home'
        })
    })
    .catch((err)=> {
        console.log(err)
    })

})


module.exports = router