import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB conection successfull");
  })
  .catch((err) => {
    console.log(err);
  });

//Router
app.use(express.json( ));
app.use("/api/user", userRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("backen server is running");
});
