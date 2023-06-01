import { Options, ReturnType, Types } from "./types.js";

export default function keyValidator(value: any, type: "isString", options?: Options): ReturnType<string>;

export default function keyValidator(value: any, type: "isNumber", options?: Options): ReturnType<number>;

export default function keyValidator(value: any, type: "isBoolean", options?: Options): ReturnType<boolean>;

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

    if (type == "isString") {
      let isValid = typeof formattedValue == "string" && formattedValue != null;

      return { isValid, value: formattedValue };
    }

    if (type == "isNumber") {
      let isValid = typeof formattedValue == "number" && formattedValue != null;

      return { isValid, value: formattedValue };
    }

    if (type == "isBoolean") {
      let isValid = typeof formattedValue == "boolean" && formattedValue != null;

      return { isValid, value: formattedValue };
    }
  } catch (error) {
    console.error(error);
  }
}
