const yup = require("yup");

let studentSchema = yup.object().shape({
  firstname: yup
    .string()
    .min(3)
    .max(15),
  address: yup
    .string()
    .min(3)
    .max(50),
  level: yup
    .number()
    .lessThan(13)
    .moreThan(0),
  phonenumber: yup
    .string()
    .min(3)
    .max(50),
  lastname: yup
    .string()
    .min(3)
    .max(50),
  mobilenumber: yup
    .string()
    .min(3)
    .max(50),
  password: yup
    .string()
    .min(5)
    .max(50)
});
export const loginSchema = yup.object().shape({
  password: yup
    .string()
    .min(5)
    .max(50),
  id: yup
    .string()
    .min(5)
    .max(10)
});

const addCourseSchema = yup.object().shape({
  title: yup.string().min(3).max(30),
  description: yup.string().min(5),
  level: yup.number().lessThan(13).moreThan(0),
  numberOfStudent: yup.number().lessThan(100).moreThan(5),
  start: yup.number().lessThan(24).moreThan(0),
  end: yup.number().lessThan(24).moreThan(0),
  days: yup.string().min(4).max(30),
});

const addDatesSchema = yup.object().shape({
  start: yup.number().lessThan(24).moreThan(0),
  end: yup.number().lessThan(24).moreThan(0),
  days: yup.string().min(4).max(30),
});

export { studentSchema, addCourseSchema, addDatesSchema };
