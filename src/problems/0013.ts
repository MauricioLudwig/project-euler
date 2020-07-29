import { getAsArray } from '../input';
import { success, end } from '../utils/logger';

export default (): void => {
  const input = getAsArray('0013.txt');

  const sum = input.reduce((acc, curr): number => acc + parseInt(curr), 0);
  let partSum = sum;

  while (true) {
    partSum /= 10;

    if (!/e+/.test(partSum.toString())) {
      break;
    }
  }

  success(`Answer: ${partSum.toString().substring(0, 10)}`);
  end();
};
