const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    is_active: {
        type: Boolean,
        default: true
    },
    address: {
        type: String,
        required: trusted,
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    },
    is_profile_completed: {
        type: Boolean,
        default: false
    }
})

const UserModel = mongoose.model('users', UserSchema)
module.exports = UserModel;