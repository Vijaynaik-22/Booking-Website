const mongoose = require('mongoose')
// Note that all of our mongoose methods are asynchronous  (they return a promise)
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`mongoose connected: ${conn.connection.host}`); //cyan is from colors package
    }catch(error){
      console.log(error);
      process.exit(1)
    }
}

module.exports = connectDB