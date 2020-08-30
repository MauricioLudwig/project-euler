import { success, end } from "../utils/logger";

export default (): void => {
  let factorialIndex = 100;
  let factorialSum = [1, 0, 0];

  while (--factorialIndex >= 1) {
    const newFactorialSum = multiplyNumbersArray(factorialSum, factorialIndex);
    factorialSum = Array.from(newFactorialSum);
  }

  const sum = factorialSum.reduce((acc, curr): number => acc + curr, 0);
  success(`Answer: ${sum}`);
  end();
};

type multiplyNumbersArrayFn = (digits: number[], n: number) => number[];

export const multiplyNumbersArray: multiplyNumbersArrayFn = (digits, n) => {
  const newArr: number[] = [];
  const digits1 = Array.from(digits).reverse();
  const numArr = n.toString().split("").map(Number).reverse();

  for (let i = 0; i < numArr.length; i++) {
    let rest = 0;

    for (let y = 0; y < digits1.length; y++) {
      const index = i + y;
      const d = digits1[y] * numArr[i] + (newArr[index] ?? 0) + rest;
      const [d1, d2 = 0] = d.toString().split("").map(Number).reverse();
      rest = d2;
      if (newArr[index] === undefined) {
        newArr.push(d1);
      } else {
        newArr[index] = d1;
      }
    }

    if (rest > 0) {
      newArr.push(rest);
    }
  }

  return Array.from(newArr).reverse();
};
