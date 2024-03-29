// Last update 11/05/2566

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Connect Database
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Connected to database successfully`))
  .catch((err) => console.log(`Error : ${err}`));

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("common"));

// Routes
app.use("/api", require("./routes/data"));
app.use("/auth", require("./routes/auth"));

// Listen
const port = process.env.PORT || 5500;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port ${port}`);
});
