import express from "express";
import User from "../models/User.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
const router = express.Router();

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (errors) {
    res.status(500).json(errors);
  }
});

//LOGIN

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("Wrong Credentials");
    const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
    const decryptPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    decryptPassword !== req.body.password && res.status(401).json("Wrong username or password");

    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ ...others });
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;