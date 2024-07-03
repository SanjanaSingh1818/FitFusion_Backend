const mongoose = require("mongoose");
const dotenv = require('dotenv')
dotenv.config({
})

mongoose.set("strictQuery", false);



const connectDB = async () =>{
  try{
     const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
     console.log(`MONGODB Connected !! DB HOST : ${connectionInstance.connection.host}`)
  }catch(error){
      console.log("MONGODB CONNECTION ERROR: ", error);
      process.exit(1)
  }
}

module.exports = connectDB;
