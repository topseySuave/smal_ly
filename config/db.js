const mongoose = require("mongoose");
const db = require("config").get('mongoURL');

const connectDB = async() => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true
        });

        console.log('mongoDb connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;