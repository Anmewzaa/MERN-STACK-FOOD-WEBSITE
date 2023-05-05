const express = require("express");
const router = express.Router();
const {
  getFoods,
  createFoods,
  getOne,
} = require("../controllers/foodController");

router.get("/get", getFoods);
router.get("/get/:foodId", getOne);
router.post("/create", createFoods);

module.exports = router;
