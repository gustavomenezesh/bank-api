const mongoose = require('mongoose');

const account = new mongoose.Schema({
    agencia: Number,
    conta: Number,
    name: String,
    balance: Number
});

module.exports = mongoose.model('Account', account)