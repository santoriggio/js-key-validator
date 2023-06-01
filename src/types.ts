export type ReturnType<T> =
  | {
      isValid: true;
      value: T;
    }
  | {
      isValid: false;
      value: T | undefined | null;
    };

export type Options = string | { path?: string };
export type Types = "isString" | "isNumber" | "isBoolean";
