import { getAsSingleLine } from '../input';
import { success, end } from '../utils/logger';

export default () => {
  const input = getAsSingleLine('0008.txt')
    .split('')
    .filter(removeSpecialChars)
    .map(Number);

  const numOfDigits = 13;
  let maxSum = 0;

  for (let i = 0; i <= input.length - numOfDigits; i++) {
    const sum = input
      .slice(i, i + numOfDigits)
      .reduce((acc, curr) => acc * curr, 1);

    if (sum > maxSum) {
      maxSum = sum;
    }
  }

  success(`Answer: ${maxSum}`);
  end();
};

const removeSpecialChars = (str: string) =>
  !['\n', '\r'].some((x) => str === x);
