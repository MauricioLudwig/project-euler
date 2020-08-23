import { success, end } from '../utils/logger';

export default (): void => {
  const base = 2;
  const digits = [base];
  let rest = 0;

  for (let i = 1; i < 1000; i++) {
    digits.forEach((o, index): void => {
      const num = o * base + rest;
      const [n1, n2 = 0] = getDigits(num);
      rest = n2;
      digits[index] = n1;
    });

    if (rest > 0) {
      digits.push(rest);
      rest = 0;
    }
  }

  const digitSum = digits.reduce((acc, curr): number => acc + curr, 0);
  success(`Answer: ${digitSum}`);

  end();
};

const getDigits = (n: number): number[] =>
  n.toString().split('').map(Number).reverse();
