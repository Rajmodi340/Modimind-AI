import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"

dotenv.config()

const port = process.env.PORT || 8001
const app = express()

app.get("/health", (req, res) => {
  res.json({ status: "ok" })
})

app.listen(port, async () => {
  console.log(`auth service started at ${port}`)
  await connectDB()
})