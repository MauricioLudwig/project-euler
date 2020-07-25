import { success, end } from '../utils/logger';
import { isPrimeNumber } from '../utils/math';

export default () => {
  const primeNumbers = [2, 3, 5];
  let n = 6;

  while (n <= 2000000) {
    if (isPrimeNumber(n, primeNumbers)) {
      primeNumbers.push(n);
    }

    n++;
  }

  const sum = primeNumbers.reduce((acc, curr) => acc + curr, 0);
  success(`Answer: ${sum}`);

  end();
};
