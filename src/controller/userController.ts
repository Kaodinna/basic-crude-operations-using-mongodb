import { Request, Response } from "express";
import {
  registerSchema,
  option,
  GenerateSalt,
  GeneratePassword,
  loginSchema,
  validatePassword,
  Generatesignature,
} from "../utils/utility";
import User from "../model/userModel";
const config = require("../config/db.config");

/**========================REGISTER USER==========================**/
export const Register = async (req: Request, res: Response) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      password,
      confirm_password,
    } = req.body;

    const validateResult = registerSchema.validate(req.body, option);
    if (validateResult.error) {
      return res.status(400).json({
        Error: validateResult.error.details[0].message,
      });
    }
    const salt = await GenerateSalt();
    const userPassword = await GeneratePassword(password, salt);

    const user = await User.findOne({ email });
    if (!user) {
      const newUser = await User.create({
        email,
        password: userPassword,
        firstName,
        lastName,
        salt,
        address,
        phone,
      });

      const user = await User.findOne({ email });
      let signature = await Generatesignature({
        _id: user?._id,
      });

      return res.status(201).json({
        message: "User created successfully",
        signature,
      });
    }
    return res.status(400).json({
      message: "User already exist",
    });
  } catch (err) {
    console.log(err);
  }
};

/**======================User Login===========================**/
export const Login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const validateResult = loginSchema.validate(req.body, option);
    if (validateResult.error) {
      return res.status(400).json({
        Error: validateResult.error.details[0].message,
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      const validation = await validatePassword(
        password,
        user.password,
        user.salt
      );
      if (validation) {
        return res.status(200).json({
          message: "You have successfully logged in",
        });
      }
    }
    return res.status(400).json({
      message: "Wrong username or password",
    });
  } catch (err) {
    console.log(err);
  }
};
