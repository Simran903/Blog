const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv").config();

console.log("DB_URL:", process.env.DB_URL);

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
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
