const { userService } = require("../services");

const signUp = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Username and password are required" });
    }

    const newUser = await userService.signUp(req.body);
    res.status(201).json({ message: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Registration failed" });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: 'Username and password are required',
    });
  }

  try {
    const result = await userService.login(req.body);
    res.status(result.status).json(result);
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred',
      error: error.message,
    });
  }
};
module.exports = { signUp, login };
