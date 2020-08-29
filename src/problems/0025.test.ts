import { addNumbersArrays } from "./0025";

describe("test function addNumbersArrays", () => {
  test("should correctly add two arrays of numbers (1)", () => {
    const n1 = [1];
    const n2 = [1];
    const n3 = addNumbersArrays(n1, n2);

    expect(n3).toEqual([2]);
  });

  test("should correctly add two arrays of numbers (2)", () => {
    const n1 = [3, 4];
    const n2 = [5, 5];
    const n3 = addNumbersArrays(n1, n2);

    expect(n3).toEqual([8, 9]);
  });

  test("should correctly add two arrays of numbers (3)", () => {
    const n1 = [5, 5];
    const n2 = [8, 9];
    const n3 = addNumbersArrays(n1, n2);

    expect(n3).toEqual([1, 4, 4]);
  });
});
