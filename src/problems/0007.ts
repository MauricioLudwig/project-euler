import { success, end } from '../utils/logger';
import { isPrimeNumber } from '../utils/math';

export default (): void => {
  const primeNumbers = [2, 3, 5];
  let n = 6;

  while (true) {
    if (isPrimeNumber(n, primeNumbers)) {
      primeNumbers.push(n);
    }

    if (primeNumbers.length === 10001) {
      break;
    }

    n++;
  }

  success(`Answer: ${primeNumbers.pop()}`);
  end();
};
