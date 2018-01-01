const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/giftReturn', {
    useMongoClient: true
})

const User = require('../models/user')
const Store = require('../models/store')
const Gift = require('../models/Gift')


const petCo = new Store ({
    name: 'Pet Co.',
    address: '4567 Dragon Way',
    giftsToReturn: []
})

const swordsRUs = new Store ({
    name: "Swords 'R' Us ",
    address: 'Near the wall',
    giftsToReturn: []
})

const WineAndAle = new Store ({
    name: 'Wine and Ale Emporium',
    address: '1453 Redwine Road, The Arbor',
})


const jonSnow = new User ({
    username: 'IknowSomethings',
    email: 'Othertargaryn@gmail.com',
    firstName: 'Jon',
    lastName: 'Snow',
    photoUrl: 'https://vignette.wikia.nocookie.net/gameofthrones/images/1/17/Jon-Snow-Kit-Harington_510.jpeg/revision/latest/scale-to-width-down/2000?cb=20120223002142',
    stores: [swordsRUs]
})

const tyrionLannister = new User ({
    username: 'Shorthand',
    email: 'Drunkendwarf@hotmail.com',
    firstName: 'Tyrion',
    lastName: 'Lannister',
    photoUrl: 'http://watchersonthewall.com/wp-content/uploads/2017/08/Tyrion-Lannister-Eastwatch.jpg',
    stores: [WineAndAle]
})

const daenerysTargaryen = new User ({
    username: 'DragonSoccerMom',
    email: 'MotherofDragons@hgmail.com',
    firstName: 'Daenerys',
    lastName: 'Targaryen',
    photoUrl: 'http://www.telegraph.co.uk/content/dam/tv/2017/07/27/Daenerys-Targaryen-xlarge_trans_NvBQzQNjv4BqtGQB12KHxxQCrwnTZkX0n0vfX_p6SFMi1h6moBw3wqs.jpg',
    stores: []
})

