import User from "../models/User.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPasswrod = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPasswrod });
  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    next(error);
    // next(errorHandler(500, "error from the function"));
  }
};
export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    const validUser = await User.findOne({ email });
    console.log(req.body);

    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    const { password: pass, ...rest } = validUser._doc;
    if (!validPassword) {
      return next(errorHandler(401, "Wrong credentials!"));
    }
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    res
      .cookie("access_token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 24 * 60 * 60 * 10),
      })
      .status(200)
      .json(rest);
  } catch (err) {
    next(err);
  }
};
