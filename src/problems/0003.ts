import { success, end } from '../utils/logger';

export default (): void => {
  let num = 600851475143;
  const primeNumbers: number[] = [];
  let loop = true;

  while (loop) {
    let divide = 2;

    while (true) {
      if (num === divide) {
        loop = false;
        break;
      }

      if (num % divide === 0) {
        num /= divide;
        break;
      }

      divide++;
    }

    primeNumbers.push(divide);
  }

  const [largestFactor] = primeNumbers.sort((a, b): number => b - a);

  success(`Answer: ${largestFactor}`);
  end();
};
