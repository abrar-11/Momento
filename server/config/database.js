import mongoose from "mongoose";

const connectDB = () => {
   mongoose.connect(process.env.MONGO_URI, () => {
      console.log("Database Connection established".cyan);
   });
};


export default connectDB