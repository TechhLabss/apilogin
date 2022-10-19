const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://labgen:LabGen321@techlabs.mc7j6eo.mongodb.net/?retryWrites=true&w=majority', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;