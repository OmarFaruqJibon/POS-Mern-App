const mongoose = require('mongoose');

const connectDB = async () => {

    try {

        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Database connected with ${connect.connection.host}`);
        
    } catch (error) {
        console.log(`Error : ${error.message}`);
        process.exit(1);
    }













};

module.exports = connectDB;
// export default connectDB;