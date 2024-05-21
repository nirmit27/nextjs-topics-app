import mongoose from "mongoose";

export default async function connectToMongoDB() {
  const uri = process.env.MONGO_DB_URI;
  const db = process.env.DB_NAME;

  await mongoose
    .connect(`${uri}${db}`)
    .then(() => {
      return;
    })
    .catch((error) => {
      console.log(`Connection failed! ${error}`);
    });
}
