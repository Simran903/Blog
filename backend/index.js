import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoute.js'

const app = express();
dotenv.config();

// Database Connection
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

// Server
app.use(express.json());
app.use(cors());

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});

// APIS
app.use("/api/user", userRoutes);
