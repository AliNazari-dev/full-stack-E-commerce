import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.js";
import authRoute from "./routes/auth.js";
import orderRoute from "./routes/order.js";
import cartRoute from "./routes/cart.js";
import productRoute from "./routes/product.js";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("DB conection successfull");
  })
  .catch((err) => {
    console.log(err);
  });

//Router
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/order", orderRoute);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("backen server is running");
});
