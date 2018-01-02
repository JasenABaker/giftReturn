const express = require('express')
const router = express.Router()

const User = require('../models/user')
const Store = require('../models/store')
const Gift = require('../models/gift')

router.get('/', (req, res) => {
    Store.find().then((stores) => {
        // res,render('stores/index', {
        //     stores,
        //     pageTitle: 'Stores'
        // })
        res.json(stores)
    })
    .catch((err)=> {
        console.log(err)
    })
})



module.exports = router