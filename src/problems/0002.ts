import { success, end } from '../utils/logger';

export default (): void => {
  const maxNum = 4000000;
  const sequence: number[] = [1, 1];

  while (true) {
    const [arg1, arg2] = sequence;
    const arg3 = arg1 + arg2;

    if (arg3 >= maxNum) {
      break;
    } else {
      sequence.unshift(arg1 + arg2);
    }
  }

  const evenNumbersSum = sequence
    .filter((o): boolean => o % 2 === 0)
    .reduce((acc, curr): number => acc + curr, 0);

  success(`Answer: ${evenNumbersSum}`);
  end();
};
