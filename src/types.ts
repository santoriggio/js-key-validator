export declare class Validator {
  value: any;

  /**
   * Check if the value is a string and return a boolean indicating the condition result.
   * @overload
   * @returns A boolean indicating if the value is a string.
   */

  isString(): boolean;

  /**
   * Check if the value is a string and return the value.
   * @overload
   * @param returnType The type of return value. Use "key" to return the value as a string.
   * @returns The value as a string if it is a string when returnType is "key".
   * @throws An error if the value is not a string.
   */

  isString(returnType: "key"): string;

  /**
   * Check if the value is a string and return the value or a boolean indicating the condition result.
   * @overload
   * @param returnType The type of return value. Use "condition" to return a boolean indicating the condition result.
   * @returns A boolean indicating if the value is a string when returnType is "condition".
   * @throws An error if the value is not a string.
   */

  isString(returnType: "condition"): boolean;
}
