import keyValidator from "./dist/index.js";

const obj = {
  name: "John",
  age: 30,
  active: true,
  phones: {
    home: "123456789",
    work: "333444555",
  },
  password: "StrongPass",
  email: "john@email.com",
};

const validate = keyValidator(obj, "isEmail", "email");

console.log(validate);

// //Check if object has name and it is a string
// const validateName = keyValidator(obj, "isString", "name");

// console.log(validateName.isValid); // Output: true
// console.log(validateName.value); // Output: John

// //Check if age is a number
// const validateAge = keyValidator(obj.age, "isNumber");

// console.log(validateAge.isValid); // Output: true
// console.log(validateAge.value); // Output: 30

// //Validate deep keys object
// const validateHomePhone = keyValidator(obj, "isNumber", "phones.home");

// console.log(validateHomePhone.isValid); // Output: true
// console.log(validateHomePhone.value); // Output: 123456789

// //Check for a key that don't exist
// const validateHeight = keyValidator(obj, "isNumber", "obj.height");

// console.log(validateHeight.isValid); // Output: false
// console.log(validateHeight.value); // Output: undefined
