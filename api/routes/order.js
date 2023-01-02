import express from "express";
import Order from "../models/Order.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

//CREATE
router.post("/", verifyToken, async (req, res) => {
  const newOrder = new Order(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (error) {
    res.status(500).json(error);
  }
});

//UPDATE
router.put("/:id", verifyAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json(err);
  }
});

DELETE;
router.delete("/:id", verifyAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Oreder has been removed and Cancelled");
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET USER Cart
router.get("/:userId", verifyToken, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET ALL ORDERS
router.get("/", verifyAdmin, async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET MONTHLY INCOME
router.get("/find/income", verifyAdmin, async (req, res) => {
  const date = new Date();
  const lastMonths = new Date(date.setMonth(date.getMonth() - 1));
  const PreviousMonths = new Date(new Date().setMonth(lastMonths.getMonth() - 1));

  try {
    const income = await User.aggregate([
      { $match: { createdAt: { $gte: PreviousMonths } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
