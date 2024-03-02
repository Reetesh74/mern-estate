import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.DATABASE);
    console.log(
      `Connected To MongoDB Database ${conn.connection.host}`
    );
  } catch (error) {
    console.log(`Error in MongoDB ${error}`);
  }
};

export default connectDB;
