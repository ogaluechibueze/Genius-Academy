import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  bloodtype: {
    type: String,
  },
  birthday: {
    type: String,
    required: true
  },
  sex: {
    type: String,
    required: true
  },
  subject: {
    type: String,
  },
  classes: {
    type: String,
  },
  image: {
    type: String,
  },
});


export const Teacher = mongoose.model('Teacher', teacherSchema);

