import keyValidator from "./dist/index.js";

const obj = {
  name: 0,
};

const value = keyValidator(obj.name).isString();
