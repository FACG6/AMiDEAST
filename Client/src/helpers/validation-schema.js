const yup = require('yup');

let studentSchema = yup.object().shape({
  firstname: yup.string().min(3).max(15),
  address: yup.string().min(3).max(50),
  level: yup.number().lessThan(13).moreThan(0),
  phonenumber: yup.string().min(3).max(50),
  lastname: yup.string().min(3).max(50),
  mobilenumber: yup.string().min(3).max(50),
  password: yup.string().min(5).max(50)
});

export { studentSchema };
