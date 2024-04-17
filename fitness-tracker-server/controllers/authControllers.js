const User = require("../models/user.js");

exports.register = async (req, res) => {
  try {
    const { username, email, password, profilePicture } = req.body;
    const user = await User.create({
      username,
      email,
      password,
      profilePicture,
    });
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) throw new Error("User not found");
    if (user.password !== password) throw new Error("Incorrect password");
    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const { username, email, profilePicture } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { username, email, profilePicture },
      { new: true }
    );
    res
      .status(200)
      .json({ message: "Profile updated successfully", user: updatedUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
