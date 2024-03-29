export type ReturnType<T> =
  | {
      isValid: true;
      value: T;
    }
  | {
      isValid: false;
      value: T | undefined | null;
    };

export type Options = string | StringOptions | NumberOptions | BooleanOptions;

export type StringOptions = {
  path?: string;
  minLength?: number;
  maxLength?: number;
  regex?: RegExp;
};

export type NumberOptions = {
  path?: string;
  min?: number;
  max?: number;
  integerOnly?: boolean;
  evenOnly?: boolean;
  oddOnly?: boolean;
  positiveOnly?: boolean;
  negativeOnly?: boolean;
};

export type BooleanOptions = {
  path?: string;
};

export type EmailOptions = {
  path?: string;
};

export type URLOptions = {
  path?: string;
};

export type JSONOptions = {
  path?: string;
};

export type ObjectOptions = {
  path?: string;
  minLength?: number;
  maxLength?: number;
};

export type Types =
  | "isString"
  | "isNumber"
  | "isBoolean"
  | "isEmail"
  | "isURL"
  | "isJSON"
  | "isObject";
