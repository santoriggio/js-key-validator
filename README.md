# js-key-validator

The `js-key-validator` package provides a utility function called `keyValidator` for validating values based on their type and options.

## Table of Contents

- [Introduction](#js-key-validator)
- [Motivation](#motivation)
- [Installation](#installation)
- [Usage](#usage)
  - [Parameters](#parameters)
    - [isString Options](#isstring)
    - [isNumber Options](#isnumber)
    - [isBoolean Options](#isboolean)
    - [isURL](#isurl)
    - [isEmail](#isemail)
- [Roadmap and Contributions](#roadmap-and-contributions)


## Motivation

The `js-key-validator` library was created with the aim of simplifying the handling of undefined and null values in JavaScript. Many developers often encounter scenarios where they need to perform checks for these values before proceeding with further logic. This repetitive task can lead to code clutter and decreased readability.

The `keyValidator` function provided by this library offers a streamlined solution to validate values and handle potential undefined and null cases more efficiently. By encapsulating the validation logic within a single function, the need for lengthy and repetitive code blocks is significantly reduced.

## Installation

You can install `js-key-validator` using npm:

```bash
npm install js-key-validator
```

## Usage

To use the `keyValidator` function, import it into your JavaScript file:

```javascript
import keyValidator from "js-key-validator";

const obj = {
  name: "John",
  age: 30,
  active: true,
  phones: {
    home: "123456789",
    work: "333444555",
  },
};
```


#### Parameters

The `keyValidator` function accepts the following parameters:

| Parameter | Type             | Description                                   |
| --------- | ---------------- | --------------------------------------------- |
| `value`   | any              | The value to be validated.                    |
| `type`    | string           | The type of validation to perform.            |
| `options` | string \| object | The path within the object for validation or The options for the validation.|

The available types and their corresponding options are as follows:

##### isString

| Option       | Type             | Description                                                           |
| ------------ | ---------------- | --------------------------------------------------------------------- |
| `path`       | string           |The path within the object for validation, representing the nested property path.|
| `minLength`  | number           | Specifies the minimum length of the string (optional).                 |
| `maxLength`  | number           | Specifies the maximum length of the string (optional).                 |
| `regex`      | RegExp           | Specifies a regular expression pattern that the string must match (optional). |

###### Example 

```javascript
// Check if object has name and it is a string
const validateName = keyValidator(obj, "isString", "name");

console.log(validateName.isValid); // Output: true
console.log(validateName.value); // Output: John
```

##### isNumber

| Option          | Type             | Description                                                                     |
| --------------- | ---------------- | ------------------------------------------------------------------------------- |
| `path`          | string           | The path within the object for validation, representing the nested property path.     |
| `min`           | number           | Specifies the minimum value of the number (optional).                            |
| `max`           | number           | Specifies the maximum value of the number (optional).                            |
| `integerOnly`   | boolean          | Specifies whether the number must be an integer (optional).                     |
| `evenOnly`      | boolean          | Specifies whether the number must be even (optional).                            |
| `oddOnly`       | boolean          | Specifies whether the number must be odd (optional).                             |
| `positiveOnly`  | boolean          | Specifies whether the number must be positive (optional).                        |
| `negativeOnly`  | boolean          | Specifies whether the number must be negative (optional).                        |

###### Example

```javascript
// Check if age is a number
const validateAge = keyValidator(obj, "isNumber", "age");

console.log(validateAge.isValid); // Output: true
console.log(validateAge.value); // Output: 30
```

##### isBoolean

| Option       | Type             | Description                                                           |
| ------------ | ---------------- | --------------------------------------------------------------------- |
| `path`       | string           | The path within the object for validation, representing the nested property path. |


##### isURL

Validates if the value is a URL.

| Option       | Type             | Description                                                           |
| ------------ | ---------------- | --------------------------------------------------------------------- |
| `path`       | string           | The path within the object for validation, representing the nested property path. |


##### isEmail

Validates if the value is an email.

| Option       | Type             | Description                                                           |
| ------------ | ---------------- | --------------------------------------------------------------------- |
| `path`       | string           | The path within the object for validation, representing the nested property path. |


You can use these options to customize the validation behavior according to your specific requirements.


## Roadmap and Contributions

The `js-key-validator` library is currently in progress, and there are more features and enhancements planned for the future. Your feedback, suggestions, and contributions are highly appreciated.

If you have any ideas for additional functionalities or improvements, please feel free to open an issue on the [GitHub repository](https://github.com/your-username/js-key-validator). Your input will help shape the future development of the library.

We welcome contributions from the community. If you would like to contribute to the project, please refer to the [contribution guidelines](CONTRIBUTING.md) for more information on how to get involved.

Together, we can make `js-key-validator` even better and more versatile!


