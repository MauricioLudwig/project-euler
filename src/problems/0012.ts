import { performance } from 'perf_hooks';
import { success, end, logPerformance } from '../utils/logger';

export default (): void => {
  let triangleSum = 1;
  let n = 1;
  let loop = true;
  const t1 = performance.now();

  while (loop) {
    n++;
    triangleSum += n;
    let divisors = 0;

    for (let i = 1; i <= Math.sqrt(triangleSum); i++) {
      if (triangleSum % i === 0) {
        divisors += triangleSum / i === i ? 1 : 2;
      }

      if (divisors >= 500) {
        loop = false;
        success(`Answer: ${triangleSum}`);
        break;
      }
    }
  }

  const t2 = performance.now();
  logPerformance(t2, t1);

  end();
};
