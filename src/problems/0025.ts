import { success, end } from "../utils/logger";

export default (): void => {
  const sequence = [[1], [1]];
  let index = 2;

  while (true) {
    index++;
    const [n1, n2] = sequence;
    const nextSequence = addNumbersArrays(n1, n2);
    sequence.push(Array.from(nextSequence));
    sequence.shift();

    if (nextSequence.length >= 1000) {
      break;
    }
  }

  success(`Answer: ${index}`);
  end();
};

type addNumbersArraysFn = (n1: number[], n2: number[]) => number[];

export const addNumbersArrays: addNumbersArraysFn = (n1, n2) => {
  const numArr1 = Array.from(n1).reverse();
  const numArr2 = Array.from(n2).reverse();
  const numArr3: number[] = [];

  const maxLen = Math.max(...[n1.length, n2.length]);
  let rest = 0;

  for (let i = 0; i < maxLen; i++) {
    const num = (numArr1[i] ?? 0) + (numArr2[i] ?? 0) + rest;
    const [d1, d2 = 0] = num.toString().split("").map(Number).reverse();
    numArr3.push(d1);
    rest = d2;
  }

  if (rest > 0) {
    numArr3.push(rest);
  }

  return numArr3.reverse();
};
