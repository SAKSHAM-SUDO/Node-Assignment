const bcrypt = require("bcrypt");
const { User } = require("../model");
const jwt = require('jsonwebtoken');

const hashPassword = async (password) => {
  const saltRounds = 10;
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
};

const signUp = async (userData) => {
  const { username, password } = userData;

  const hashedPassword = await hashPassword(password);
  const user = new User({ username, password: hashedPassword });

  try {
    const savedUser = await user.save();
    return savedUser;
  } catch (error) {
    console.error("Error saving user:", error);
    throw error;
  }
};

const login = async (userData) => {
  const { username, password } = userData;
  try {
    const user = await User.findOne({ username });

    if (!user) {
      return { status: 401, message: "User not found" };
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return { status: 401, message: "Incorrect Password" };
    }

    const token = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return { status: 200, message: "Login successful", token };
  } catch (error) {
    throw error;
  }
};
module.exports = { signUp, hashPassword, login };
