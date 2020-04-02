const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = async (dbOptions = {}) => {
    const {
        host = process.env.DB_HOST || 'localhost',
        port = process.env.DB_PORT ||'27017',
        database = process.env.DB_DATABASE ||'task'
    } = dbOptions;

    const options = {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
    };

    const uri = `mongodb://${host}:${port}/${database}`;

    try {
        await mongoose.connect(uri, options);
        console.log('Connected to database');
    } catch (err) {
        console.error('Database connection failed: ', String(err));
    }
};
