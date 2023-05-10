const express = require("express");
const router = express.Router();
const {
  getFoods,
  createFoods,
  getOne,
  removeFoods,
  updateFoods,
} = require("../controllers/foodController");

const { requireLogin } = require("../controllers/authController");

router.get("/get", getFoods);
router.get("/get/:foodId", getOne);
router.post("/create", requireLogin, createFoods);
router.delete("/delete/:foodId", requireLogin, removeFoods);
router.put("/update/:foodId", requireLogin, updateFoods);

module.exports = router;
