const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5000;
const cors = require("cors");
const User = require("./models/user.js");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/login");

app.post("/register", (req, res) => {
  User.create(req, body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.listen(PORT, () => {
  console.log(`servere listen on http://localhost:${PORT}`);
});

// vEnjyW6ybgVCQOOp
// aatifwarraich10
