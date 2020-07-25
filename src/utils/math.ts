export const isPrimeNumber = (n: number, primeNumbers: number[]): boolean => {
  const isDivisibleByTwo = n % 2 === 0;
  const isDivisibleByFive = n % 5 === 0;
  const isDivisibleByPrimeNumbers = primeNumbers.some((o) => n % o === 0);

  const sumOfDigits = n
    .toString()
    .split('')
    .map(Number)
    .reduce((acc, curr): number => acc + curr, 0);
  const isDivisibleByThree = sumOfDigits % 3 === 0;

  return !(
    isDivisibleByTwo ||
    isDivisibleByThree ||
    isDivisibleByFive ||
    isDivisibleByPrimeNumbers
  );
};

export const isPalindrome = (n: number): boolean => {
  const reverse = n.toString().split('').reverse().join('');
  return n.toString() === reverse;
};
