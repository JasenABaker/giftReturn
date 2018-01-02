const express = require('express')
const router = express.Router({mergeParams: true})

const User = require('../models/user')
const Store = require('../models/store')
const Gift = require('../models/gift')

router.get('/', (req, res) => {
    const userId = req.params.userid
    User.findById(userId)
    .then((user) => {
        res.render('stores/index', {
            stores: user.stores,
            userId,
            pageTitle: 'Stores'
        })
        // res.json(stores)
    })
    .catch((err)=> {
        console.log(err)
    })
})
router.get('/:stordId', (req, res) => {
    const storeId = req.params.storeId
    const userId = req.params.userid
    
    User.findById(userId)
    .then((user)=>{
        const store = user.store.id(storeId)
        res.render('stores/show', {
            userId,
            store,
            pageTitle: store.name
        })

    })
})

router.get('/:storeId/delete', (req,res) => {
    const userId = req.params.userid
    const storeId = req.params.storeId
    User.findById(userId)
    .then ((user) =>{
        user.stores.id(storeId).remove()
        return user.save()
    })
    .then(()=>{
        res.redirect(`users/${userId}/stores/`)
    })
    .catch((err) => {
        console.log(err)
    })
})



module.exports = router