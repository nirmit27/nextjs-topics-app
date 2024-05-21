/* Connecting to MongoDB */

require("dotenv").config();
const mongoose = require("mongoose");

const connectToMongoDB = () => {
  const uri = process.env.MONGO_DB_URI;
  const db = process.env.DB_NAME;
  const collection = process.env.COLLECTION_NAME;

  mongoose
    .connect(`${uri}${db}`)
    .then(() => {
      console.log(`Connected to database : ${db}`);
    })
    .catch(() => {
      console.log("Connection failed!");
    });
};

// connectToMongoDB();

module.exports = connectToMongoDB;
