import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("router test success");
});

export default router;
