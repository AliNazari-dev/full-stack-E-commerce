import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB conection successfull");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/api/test", (req,res) => {
  res.send("test done")
});

app.listen(process.env.PORT || 5000, () => {
  console.log("backen server is running");
});
