import { success, end } from '../utils/logger';

/*

  Postulations
  
  a^2 + b^2 = c^2
  a + b + c = 1000

  Eliminate one of the unknown variables (c)

  c = sqrt(a^2 + b^2)
  sqrt(a^2 + b^2) = 1000 - (a + b)
  a^2 + b^2 = 1000000 - 2000(a + b) + (a + b)^2
  a^2 + b^2 = 1000000 - 2000a - 2000b + a^2 + b^2 + 2ab
  0 = 1000000 - 2000a - 2000b + 2ab
  1000b - ab = 500000 - 1000a
  b(1000 - a) = 500000 - 1000a
  b = (500000 - 1000a) / (1000 - a) -> calcB function below

*/

export default (): void => {
  for (let a = 1; a < 1000; a++) {
    const b = calcB(a);
    const c = 1000 - a - b;

    if (verifyNumbers(a, b, c)) {
      success(`Answer: ${a * b * c}`);
      break;
    }
  }

  end();
};

const calcB = (n: number): number => (500000 - 1000 * n) / (1000 - n);

const verifyNumbers = (...numbers: number[]): boolean =>
  numbers.every((n) => Number.isInteger(n) && n > 0);
