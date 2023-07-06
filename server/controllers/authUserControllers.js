import jwt from "jsonwebtoken";

import Users from "../models/userModel.js";

const addUser = async (req, res) => {
  try {
    const { userName, email, password, confirmPassword } = req.body;

    const user = await Users.create({
      userName,
      email,
      password,
      confirmPassword,
    });

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "30d",
    });

    res.status(200).json({
      message: "success",
      token,
      data: { email, id: user._id, name: user.userName },
    });
  } catch (err) {
    res.status(400).json({
      message: "fail",
      data: err.message,
    });
  }
};

const logInUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. check for email and password
    if (!password || !email) {
      throw new Error("Please enter username and password");
    }

    // 2. check if user exists
    const user = await Users.findOne({ email });
    if (!user) throw new Error("Please register to continue");

    // 3 .check password
    const passwordCorrect = await user.checkPassword(password, user.password);

    // 4. generate jwt token if password is correct
    if (!passwordCorrect) throw new Error("Wrong email or password");
    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "30d",
    });

    res.status(200).json({
      message: "success",
      token,
      data: { email, id: user._id, name: user.userName },
    });
  } catch (err) {
    res.status(400).json({
      message: "fail",
      data: err.message,
    });
  }
};

export { addUser, logInUser };
