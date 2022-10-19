const mongoose = require('../database');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true,
        select: false
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;