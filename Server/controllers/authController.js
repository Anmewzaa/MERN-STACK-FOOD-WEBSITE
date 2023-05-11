const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { expressjwt: expressjwt } = require("express-jwt");

const User = require("../models/user");

exports.get = async (req, res) => {
  await User.find({}).then((data) => {
    res.json(data);
  });
};

exports.register = async (req, res) => {
  const { username, password } = req.body;
  if (!(username && password)) {
    return res.send("Input required").status(400);
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const newpassword = await bcrypt.hash(password, salt);
    await User.create({ username, password: newpassword })
      .then((data) => {
        res.json(data).status(201);
      })
      .catch((err) => {
        res.json(`Error : ${err}`);
      });
  } catch (err) {
    console.log(err);
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  if (!(username && password)) {
    res.send("Input required").status(400);
  }
  try {
    var user = await User.findOne({ username });
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = jwt.sign({ username }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      res.json(token);
    } else {
      res.send("Invalid password");
    }
  } catch (err) {
    console.log(err);
  }
};

exports.requireLogin = expressjwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
  userProperty: "auth",
});
