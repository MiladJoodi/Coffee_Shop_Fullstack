const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: false,
    },
    role: {
        type: String,
        default: "USER",
    },
    // refreshToken: {
    //     type: String,
    // },
    refreshToken: String
});