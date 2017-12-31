import { Schema } from 'mongoose';

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/giftReturn')
mongoose.Promise = global.Promise


const UserSchema = new Schema(
    {
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

const StoreSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Store needs a name']
        },
        address: {
            type: String,
            required: [true, 'Where we goona pick up the stuff?']
        },
        giftsToReturn: [GiftSchema]
    },
    {
        timestamps: {}
    }
)