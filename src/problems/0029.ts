import { success } from '../utils/logger';

export default async (): Promise<void> => {
  const combinations: number[] = [];
  const min = 2;
  const max = 100;

  for (let a = min; a <= max; a++) {
    for (let b = min; b <= max; b++) {
      combinations.push(Math.pow(a, b));
    }
  }

  const uniqueLs = new Set(combinations);
  success(`Answer: ${uniqueLs.size}`);
};
