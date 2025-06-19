import mongoose from "mongoose";
import 'dotenv/config';

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("MongoDB Connected");
    } catch (err) {
      console.error("MongoDB Connection Error:", err.message);
      process.exit(1); // Exit if connection fails
    }
  };
  
  export default connectDB;

// Do not use '@' symbol in your databse user's password else it will show an error.