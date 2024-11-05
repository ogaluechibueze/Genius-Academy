import { Teacher } from "../models/teacherSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

 export const createTeacher = async (req, res, next) => {
  console.log(req.body);
    const { username, email, password, firstname,
      lastname, phone, address, bloodtype, birthday,
      sex, subject, classes, image
     } = req.body;
    try {
         if (!firstname || !lastname || !phone || !address || !birthday || !sex || !username || !password) {
          handleValidationError("Please Fill Full Form!", 400);
    }
    await Teacher.create({username, email, password, firstname,
      lastname, phone, address, bloodtype, birthday,
      sex, subject, classes, image});
    res.status(200).json({
      success: true,
      message: "Teacher Created!",
    }); 
    } catch (err) {
      next(err)
    }
  };
  

  export const getAllTeachers = async (req, res, next) => {
    try {
     const teachers = await Teacher.find();
    res.status(200).json({
      success: true,
      teachers,
    });   
    } catch (err) {
      next(err)
    }
  };
  
 
