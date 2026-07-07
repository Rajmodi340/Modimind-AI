import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URL
    if (!uri) {
      throw new Error("MONGODB_URL is not defined")
    }

    await mongoose.connect(uri)
    console.log("Connected to MongoDB")
  } catch (err) {
    console.error("Error connecting to MongoDB:", err)
  }
}

export default connectDB