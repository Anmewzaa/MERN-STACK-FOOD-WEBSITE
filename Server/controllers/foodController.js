const Foods = require("../models/foods");
const { v4: uuidv4 } = require("uuid");

// Get all food
exports.getFoods = async (req, res) => {
  try {
    await Foods.find({}).then((data) => {
      res.json(data);
    });
  } catch (err) {
    console.log(`Error : ${err}`);
  }
};

// Get food
exports.getOne = async (req, res) => {
  const { foodId } = req.params;
  try {
    await Foods.findOne({ foodId }).then((data) => {
      res.send(data);
    });
  } catch (err) {
    console.log(`Error : ${err}`);
  }
};

// Create Foods
exports.createFoods = async (req, res) => {
  const { foodName, foodImage, foodMaterial, foodType } = req.body;
  if (!(foodName && foodMaterial && foodType)) {
    return res.send("Input required");
  }
  const foodId = uuidv4();
  try {
    await Foods.create({
      foodId,
      foodName,
      foodImage,
      foodMaterial,
      foodType,
    })
      .then((data) => {
        res.json(data).status(201);
      })
      .catch((err) => {
        res.json({ Error: `${err}` }).status(400);
      });
  } catch (err) {
    console.log(`Error : ${err}`);
  }
};
