import { handleValidationError } from "../middlewares/errorHandler.js";
import {Admin } from "../models/adminRegisterSchema.js";
import { Student } from "../models/usersSchema.js";
import { Teacher } from "../models/usersSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = "ggwttquua42334bna?12"
export const adminSignIn = async (req, res, next) => {
  const { username, password } = req.body;
  
  try {
    if (!username || !password) {
      handleValidationError("Please provide email and password", 400);
    }
    const existingAdmin = await Admin.findOne({ username });

    if (!existingAdmin) {
      return res.json({ error: "Invalid email or password" });
    }
if (await bcrypt.compare(password, existingAdmin.password)){
  const token = jwt.sign({}, JWT_SECRET);
  if(res.status(201)){
    return res.json({status: "ok", data:token});
  }
  else{
    return res.json({error: "error"});
  }
}
res.json({status: "error", error: "invalid Password"});
  }
  catch (err) {
    next(err);
  }
}

export const studentSignIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      handleValidationError("Please provide email and password", 400);
    }
    // Your sign-in logic for student goes here
    res.status(200).json({
      success: true,
      message: "Student signed in successfully",
    });
  } catch (err) {
    next(err);
  }
};

export const teacherSignIn = async (req, res, next) => { 
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      handleValidationError("Please provide email and password", 400);
    }
    // Your sign-in logic for teacher goes here
    res.status(200).json({
      success: true,
      message: "Teacher signed in successfully",
    });
  } catch (err) {
    next(err);
  }
};
