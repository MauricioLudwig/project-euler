import { multiplyNumbersArray } from "./0020";

describe("test function multiplyNumbersArray", () => {
  test("should correctly multiply values contained in array with a given integer (1)", () => {
    const digits = [3, 3];
    const n = 11;
    const numArr = multiplyNumbersArray(digits, n);

    expect(numArr).toEqual([3, 6, 3]);
  });

  test("should correctly multiply values contained in array with a given integer (2)", () => {
    const digits = [3, 3];
    const n = 33;
    const numArr = multiplyNumbersArray(digits, n);

    expect(numArr).toEqual([1, 0, 8, 9]);
  });

  
  test("should correctly multiply values contained in array with a given integer (3)", () => {
    const digits = [1, 0];
    const n = 9;
    const numArr = multiplyNumbersArray(digits, n);

    expect(numArr).toEqual([9, 0]);
  });
});
