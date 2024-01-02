import { success } from "../utils/logger";
import { getPrimeFactorization } from "../utils/math";

export default (): void => {
  let n = 2;
  let ls: number[] = [];
  const factor = 4;

  while (true) {
    const factorization = getPrimeFactorization(n);
    const unique = new Set(factorization);

    if (unique.size === factor) {
      const last = ls[ls.length - 1] ?? 0;

      if (n !== last + 1) {
        ls = [];
      }

      ls.push(n);
    }

    if (ls.length === factor) {
      break;
    }

    n++;
  }

  success(`Answer: ${ls[0]}`);
};
