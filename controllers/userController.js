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

router.get('/new', (req, res) =>{
    res.render('users/new', { pageTitle: 'New User'})
})


router.get('/:userid', (req, res) =>{
    const userId = req.params.userid
    User.findById(userId)
    .then((user)=>{
        res.render('users/show', {
            user,
            pageTitle: user.username
        })
    })
    .catch((err)=>{
        console.log(err)
    })
})

router.get('/:userid/edit', (req, res) =>{
    const userId = req.params.userid
    User.findById(userId)
    .then((user)=> {
        res.render('users/edit', {
            user,
            pageTitle: 'Profile_update'
        })
    })
    .catch((err) =>{
        console.log(err)
    })
})

router.put('/:userid', (req, res) =>{
    const updateUser = req.body
    const userId = req.params.userid
    User.findByIdAndUpdate(userId, updateUser, { new: true })
    .then((updatedUser) => {
        res.redirect(`/users/${userId}`)
    })
})

router.post('/', (req, res) =>{
    const newUser = req.body
    if(!newUser.photoUrl){
        newUser.photoUrl = 'https://images.esellerpro.com/2243/I/362/96/DECOR712-drogon-dragon-egg-game-of-thrones%20(1).JPG'
    }
    User.create(newUser)
    .then(()=>{
        res.redirect('/users')
    })
    .catch((err)=>{
        console.log(err)
    })
})


module.exports = router