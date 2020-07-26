import { getAsArray } from '../input';
import { success, end } from '../utils/logger';

export default (): void => {
  const input = getAsArray('0011.txt').map((o): number[] =>
    o.split(' ').map(Number)
  );

  const range = [1, 2, 3];
  let maxSum = 0;

  for (let i = 0; i < input.length; i++) {
    for (let y = 0; y < input[i].length; y++) {
      const origin = input[i][y];

      const allSum = [
        range.reduce(
          (acc, curr): number => acc * getNum(i, y - curr, input),
          origin
        ),
        range.reduce(
          (acc, curr): number => acc * getNum(i, y + curr, input),
          origin
        ),
        range.reduce(
          (acc, curr): number => acc * getNum(i - curr, y, input),
          origin
        ),
        range.reduce(
          (acc, curr): number => acc * getNum(i + curr, y, input),
          origin
        ),
        range.reduce(
          (acc, curr): number => acc * getNum(i + curr, y - curr, input),
          origin
        ),
        range.reduce(
          (acc, curr): number => acc * getNum(i - curr, y - curr, input),
          origin
        ),
        range.reduce(
          (acc, curr): number => acc * getNum(i + curr, y + curr, input),
          origin
        ),
        range.reduce(
          (acc, curr): number => acc * getNum(i - curr, y + curr, input),
          origin
        ),
      ];

      const [sum] = allSum.sort((a, b) => b - a);
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }

  success(`Answer: ${maxSum}`);
  end();
};

const getNum = (i: number, y: number, input: number[][]): number => {
  if (!input[i]) {
    return 0;
  }

  return input[i][y] ?? 0;
};
