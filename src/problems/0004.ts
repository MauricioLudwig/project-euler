import { success, end } from '../utils/logger';
import { isPalindrome } from '../utils/math';

export default (): void => {
  const palindromes: number[] = [];

  for (let i = 999; i > 99; i--) {
    for (let y = 999; y > 99; y--) {
      const sum = i * y;

      if (isPalindrome(sum)) {
        palindromes.push(sum);
      }
    }
  }

  const [largestPalindrome] = palindromes.sort((a, b): number => b - a);
  success(`Answer: ${largestPalindrome}`);
  end();
};
