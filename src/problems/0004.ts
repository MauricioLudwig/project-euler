import { success, end } from '../utils/logger';

export default () => {
  const palindromes: number[] = [];

  for (let i = 999; i > 99; i--) {
    for (let y = 999; y > 99; y--) {
      const sum = i * y;

      if (isPalindrome(sum)) {
        palindromes.push(sum);
      }
    }
  }

  const [largestPalindrome] = palindromes.sort((a, b) => b - a);
  success(`Answer: ${largestPalindrome}`);
  end();
};

const isPalindrome = (num: number) => {
  const reverse = num.toString().split('').reverse().join('');
  return num.toString() === reverse;
};
