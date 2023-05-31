type ValidatorType = "isString" | "isBoolean";

type TestReturn = {};

export default function keyValidator(value: any, path: string = "") {
  try {
    //check if value is an object but not an array
    if (typeof value == "object" && Array.isArray(value) == false) {
      if (path.length > 0) {
        const convertedValue = eval(`value.${path}`);

        return new Validator(convertedValue);
      }

      return new Validator(value);
    }

    return new Validator(value);
  } catch (error) {}
}

class Validator {
  value: any;
  exist: boolean;

  constructor(value: any) {
    this.init(value);
  }

  private init(value: any) {
    if (typeof value != "undefined") {
      this.value = value;
    }
  }

  isString(): boolean;

  isString(returnType: "key"): string;

  isString(returnType: "key" | "condition" | undefined = "condition"): string | boolean {
    try {
      if (returnType === "condition") {
        if (typeof this.value === "string") return true;
        return false;
      }

      if (typeof this.value === "string") return this.value;

      throw new Error("Value is not a string");
    } catch (error) {
      console.error(error);
    }
  }
}
