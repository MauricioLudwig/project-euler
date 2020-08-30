import { success, end } from "../utils/logger";

export default (): void => {
  const exponent = 5;
  const validNumbers: number[] = [];

  for (let i = 2; i < 1e6; i++) {
    const sum = i
      .toString()
      .split("")
      .map(Number)
      .reduce((acc, curr): number => acc + Math.pow(curr, exponent), 0);

    if (i === sum) {
      validNumbers.push(i);
    }
  }

  const validPowersSum = validNumbers.reduce((acc, curr): number => {
    return acc + curr;
  }, 0);
  success(`Answer: ${validPowersSum}`);
  end();
};
