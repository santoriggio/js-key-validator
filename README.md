# js-key-validator

The `js-key-validator` package provides a utility function called `keyValidator` for validating values based on their type and options.

## Motivation

The `js-key-validator` library was created with the aim of simplifying the handling of undefined and null values in JavaScript. Many developers often encounter scenarios where they need to perform checks for these values before proceeding with further logic. This repetitive task can lead to code clutter and decreased readability.

The `keyValidator` function provided by this library offers a streamlined solution to validate values and handle potential undefined and null cases more efficiently. By encapsulating the validation logic within a single function, the need for lengthy and repetitive code blocks is significantly reduced.

### Example

Consider the following example where we need to check if a person object has a valid name property:

```javascript
const person = {
  name: 'John Doe',
  age: 30,
  address: null
};

// Without js-key-validator
if (person && person.name !== undefined && person.name !== null) {
  // Perform some logic with person.name
  console.log('Name:', person.name);
}

// With js-key-validator
const result = keyValidator(person.name, 'isString');
if (result.isValid) {
  // Perform some logic with result.value
  console.log('Name:', result.value);
}
```

## Installation

You can install `js-key-validator` using npm:

```bash
npm install js-key-validator
```

## Usage

To use the `keyValidator` function:

```javascript
import keyValidator from "js-key-validator";
```

```javascript

const obj = {
  name: "John",
  age: 30,
  active: true,
  phones: {
    home: "123456789",
    work: "333444555",
  },
};

//Check if object has name and it is a string
const validateName = keyValidator(obj, "isString", "name");

console.log(validateName.isValid); // Output: true
console.log(validateName.value); // Output: John

//Check if age is a number
const validateAge = keyValidator(obj.age, "isNumber");

console.log(validateAge.isValid); // Output: true
console.log(validateAge.value); // Output: 30

//Validate deep keys object
const validateHomePhone = keyValidator(obj, "isNumber", "phones.home");

console.log(validateHomePhone.isValid); // Output: true
console.log(validateHomePhone.value); // Output: 123456789

//Check for a key that doesn't exist
const validateHeight = keyValidator(obj, "isNumber", "obj.height");

console.log(validateHeight.isValid); // Output: false
console.log(validateHeight.value); // Output: undefined
```

#### Parameters

The `keyValidator` function accepts the following parameters:

- `value` (any): The value to be validated. It can be any value.

- `type` (string): The type of validation to perform. Supported types are:

  - `"isString"`: Validates if the value is a string.
  - `"isNumber"`: Validates if the value is a number.
  - `"isBoolean"`: Validates if the value is a boolean.

- `options` (string | object): The options for the validation. It can be either a string or an object. If it's a string, it represents a path option. If it's an object, it can have a property called `path` which represents the path option.

  - If `options` is a string, it represents the path option for validation.
  - If `options` is an object, it can have the following property:

    - `path` (string): The path option for validation, representing the path to a file or resource.

## Roadmap and Contributions

The `js-key-validator` library is currently in progress, and there are more features and enhancements planned for the future. Your feedback, suggestions, and contributions are highly appreciated.

If you have any ideas for additional functionalities or improvements, please feel free to open an issue on the [GitHub repository](https://github.com/santoriggio/js-key-validator/issues). Your input will help shape the future development of the library.


