import { performance } from 'perf_hooks';
import { success, end, logPerformance } from '../utils/logger';
import { isPrimeNumber } from '../utils/math';

export default () => {
  const primeNumbers = [2, 3, 5];
  let n = 6;

  const t1 = performance.now();

  while (n <= 2000000) {
    if (isPrimeNumber(n, primeNumbers)) {
      primeNumbers.push(n);
    }

    n++;
  }

  const t2 = performance.now();

  logPerformance(t2, t1);

  const sum = primeNumbers.reduce((acc, curr) => acc + curr, 0);
  success(`Answer: ${sum}`);

  end();
};
