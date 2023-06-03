import {
  BooleanOptions,
  EmailOptions,
  NumberOptions,
  Options,
  ReturnType,
  StringOptions,
  Types,
  URLOptions,
} from "./types.js";

export default function keyValidator(
  value: any,
  type: "isString",
  options?: string | StringOptions
): ReturnType<string>;

export default function keyValidator(
  value: any,
  type: "isNumber",
  options?: string | NumberOptions
): ReturnType<number>;

export default function keyValidator(
  value: any,
  type: "isBoolean",
  options?: string | BooleanOptions
): ReturnType<boolean>;

export default function keyValidator(
  value: any,
  type: "isEmail",
  options?: string | EmailOptions
): ReturnType<string>;

export default function keyValidator(
  value: any,
  type: "isURL",
  options?: string | URLOptions
): ReturnType<string>;

export default function keyValidator(value: any, type: Types, options?: Options) {
  try {
    let formattedValue = value;

    if (typeof options != "undefined") {
      let path = "";

      if (typeof options == "string") {
        //is path
        path = options;
      }

      if (typeof options == "object") {
        if (typeof options.path != "undefined") {
          path = options.path;
        }
      }

      if (path != "") {
        path.split(".").forEach((x, index, array) => {
          //const isLast = array.length == index + 1;

          formattedValue = formattedValue[x];
          // if (isLast) {
          // } else {
          //   const validate = isObject(formattedValue);

          //     formattedValue = validate.value[x];

          // }
        });
      }
    }

    if (type == "isString") {
      const { minLength, maxLenghth, regex } = options as StringOptions;

      let isValid = typeof formattedValue == "string" && formattedValue != null;

      if (isValid) {
        if (typeof minLength != "undefined") {
          if (formattedValue.length < minLength) isValid = false;
        }
        if (typeof maxLenghth != "undefined") {
          if (formattedValue.length > maxLenghth) isValid = false;
        }
        if (typeof regex != "undefined") {
          if (!regex.test(formattedValue)) isValid = false;
        }
      }

      return { isValid, value: formattedValue };
    }

    if (type == "isNumber") {
      const { min, max, evenOnly, oddOnly, integerOnly, negativeOnly, positiveOnly } =
        options as NumberOptions;

      let isValid = typeof formattedValue == "number" && formattedValue != null;

      if (isValid) {
        if (typeof min != "undefined") {
          if (formattedValue < min) isValid = false;
        }

        if (typeof max != "undefined") {
          if (formattedValue > max) isValid = false;
        }

        if (typeof evenOnly != "undefined" && evenOnly) {
          if (formattedValue % 2 != 0) isValid = false;
        }

        if (typeof oddOnly != "undefined" && oddOnly) {
          if (formattedValue % 2 == 0) isValid = false;
        }

        if (typeof integerOnly != "undefined" && integerOnly) {
          if (!Number.isInteger(formattedValue)) isValid = false;
        }

        if (typeof negativeOnly != "undefined" && negativeOnly) {
          if (formattedValue > 0) isValid = false;
        }
        if (typeof positiveOnly != "undefined" && positiveOnly) {
          if (formattedValue < 0) isValid = false;
        }
      }

      return { isValid, value: formattedValue };
    }

    if (type == "isBoolean") {
      let isValid = typeof formattedValue == "boolean" && formattedValue != null;

      return { isValid, value: formattedValue };
    }

    if (type == "isEmail") {
      const emailRegex = /^[\w.-]+@[a-zA-Z_-]+?\.[a-zA-Z]{2,}$/;

      let isValid = typeof formattedValue != "undefined" && formattedValue != null;

      if (isValid) {
        if (!emailRegex.test(formattedValue)) isValid = false;
      }

      return { isValid, value: formattedValue };
    }

    if (type == "isURL") {
      let isValid = typeof formattedValue != "undefined" && formattedValue != null;

      try {
        new URL(value);
        isValid = true;
      } catch (error) {
        isValid = false;
      }

      return { isValid, value: formattedValue };
    }
  } catch (error) {
    console.error(error);
  }
}
