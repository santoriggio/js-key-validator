# js-key-validator

The "js-key-validator" library provides a set of utility functions to validate keys in JavaScript objects.

## Installation

You can install the library using npm:

```shell
npm install js-key-validator
```


## Usage

To use the "js-key-validator" library:

```javascript
import keyValidator from "js-key-validator"
```

```javascript

const obj = {
  name: 'John',
  age: 30,
  active: true
};

// Check if 'name' key exists in the object
console.log(keyValidator.exist(obj, 'name')); // Output: true

// Check if 'email' key exists in the object
console.log(keyValidator.exist(obj, 'email')); // Output: false

// Check if 'age' value is a number
console.log(keyValidator.isNumber(obj, 'age')); // Output: true

// Check if 'active' value is a boolean
console.log(keyValidator.isBoolean(obj, 'active')); // Output: true

```
