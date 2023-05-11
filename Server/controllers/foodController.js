const Foods = require("../models/foods");
const { v4: uuidv4 } = require("uuid");

// Get all food
exports.getFoods = async (req, res) => {
  try {
    await Foods.find({})
      .then((data) => {
        res.json(data).status(200);
      })
      .catch((err) => res.json(err));
  } catch (err) {
    console.log(`Error : ${err}`);
  }
};

// Get food
exports.getOne = async (req, res) => {
  const { foodId } = req.params;
  try {
    await Foods.findOne({ foodId })
      .then((data) => {
        res.send(data).status(200);
      })
      .catch((err) => res.json(err));
  } catch (err) {
    console.log(`Error : ${err}`);
  }
};

// Create Foods
exports.createFoods = async (req, res) => {
  const { foodName, foodImage, foodMaterial, foodType } = req.body;
  if (!(foodName && foodImage && foodMaterial && foodType)) {
    return res.send("Input required").status(400);
  }
  await Foods.findOne({ foodName }).then((data) => {
    if (data) {
      return res.send("This food name is already taken").status(400);
    }
  });
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
        res.json("Success").status(201);
      })
      .catch((err) => res.json(err));
  } catch (err) {
    console.log(`Error : ${err}`);
  }
};

// Delete Foods
exports.removeFoods = async (req, res) => {
  const { foodId } = req.params;
  try {
    await Foods.findOneAndRemove({ foodId })
      .then((data) => {
        res.json("Success").status(200);
      })
      .catch((err) => res.json(err));
  } catch (err) {
    console.log(`Error : ${err}`);
  }
};

// Update Foods
exports.updateFoods = async (req, res) => {
  const { foodId } = req.params;
  const { foodName, foodImage, foodMaterial, foodType } = req.body;
  try {
    await Foods.findOneAndUpdate(
      { foodId },
      { foodName, foodImage, foodMaterial, foodType }
    )
      .then(() => {
        res.json("Success").status(200);
      })
      .catch((err) => res.json(err));
  } catch (err) {
    console.log(`Error : ${err}`);
  }
};
