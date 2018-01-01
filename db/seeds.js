const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/giftReturn')

const User = require('../models/user')
const Store = require('../models/store')
const Gift = require('../models/Gift')


const swordPolish = new Gift ({
    name: 'Sword Polish',
    description: 'Good for polishing swords, knives and daggers.',
    price: 20,
    giftGiver: 'Arya Stark'
})

const chalice= new Gift ({
    name: 'Gold Chalice',
    description: 'Gold encrusted Chalice. Good for wine or ale.',
    price: 340,
    giftGiver: 'Ser Bronn of the Blackwater'
})

const kibble = new Gift ({
    name: "People 'N' Bits Dragon Kibble",
    description: 'Chock full of the things dragons love.',
    price: 500,
    giftGiver: 'Khal Drogo'
})


const petCo = new Store ({
    name: 'Pet Co.',
    address: '4567 Dragon Way',
    giftsToReturn: []
})

const swordsRUs = new Store ({
    name: "Swords 'R' Us ",
    address: 'Near the wall',
    giftsToReturn: [swordPolish]
})

const WineAndAle = new Store ({
    name: 'Wine and Ale Emporium',
    address: '1453 Redwine Road, The Arbor',
    giftsToReturn: [chalice]
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
    stores: [petCo]
})


Gift.remove()
    .then(()=>{
        return Store.remove()
    })
    .then(()=>{
        return User.remove()
    })
    .then(()=>{
        return jonSnow.save()
    })
    .then((user)=>{
        console.log('Jon Snow was saved')
        return tyrionLannister.save()
    })
    .then((user)=>{
        console.log('Tyrion Lannister was saved')
        return daenerysTargaryen.save()
    })
    .then((user)=>{
        console.log('Daenerys Targaryen was saved')
        console.log('All users saved')
        mongoose.connection.close
    })
    .catch((err)=>{
        console.log(err)
    })
