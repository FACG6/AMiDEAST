const yup = require('yup');

let addStudentSchema = yup.object().shape({
  firstname: yup.string().min(3).max(15).required('First name must be at least 3 characters'),
  address: yup.string().min(3).max(50).required('Address must be at least 3 characters'),
  level: yup.number().lessThan(13).moreThan(0).required('level must be greater than 0'),
  phonenumber: yup.string().min(3).max(50).required('phonenumber must be at least 3 characters'),
  lastname: yup.string().min(3).max(50).required('lastnem must be at least 3 characters'),
  mobilenumber: yup.string().min(3).max(50).required('mobilenumber must be at least 3 characters'),
  password: yup.string().min(5).max(50).required('password must be at least 3 characters'),
});


export { addStudentSchema };
