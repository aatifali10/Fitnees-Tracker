const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("./routes/authRoutes.js");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/fitness_tracker_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
