import { Schema } from 'mongoose';

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/giftReturn')
mongoose.Promise = global.Promise


const UserScheme = new Schema ({
    
    username: {
        type: String,
        required: [true, 'Put in username!']
    },
    email: {
        type: String
    },
    firstName: {
        type: String,
        required: [true, "Put in a first name!"]
    },
    lastName: {
        type: String,
        required: [true, "Put in a last name!"]
    },
    photoUrl: {
        type: String,
        default: 'https://www.fillmurray.com/200/300'
    },
    stores: [StoreSchema]
},
{
    timestamps: {}
}
)