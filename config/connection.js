const mongoose = require('mongoose');

mongoose.connect(process.env.MONOGDB_URI || 'mongodb://127.0.0.1:27017/social_network_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose.connection;