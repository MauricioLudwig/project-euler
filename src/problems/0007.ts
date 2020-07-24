import { success, end } from '../utils/logger';

export default () => {
  const primeNumbers = [2, 3, 5];
  let n = 6;

  while (true) {
    if (isPrimeNumber(n, primeNumbers)) {
      primeNumbers.push(n);
    }

    if (primeNumbers.length === 10001) {
      break;
    }

    n++;
  }

  success(`Answer: ${primeNumbers.pop()}`);
  end();
};

const isPrimeNumber = (n: number, primeNumbers: number[]) => {
  const isDivisibleByTwo = n % 2 === 0;
  const isDivisibleByFive = n % 5 === 0;
  const isDivisibleByPrimeNumbers = primeNumbers.some((o) => n % o === 0);

  const sumOfDigits = n
    .toString()
    .split('')
    .map(Number)
    .reduce((acc, curr) => acc + curr, 0);
  const isDivisibleByThree = sumOfDigits % 3 === 0;

  return !(
    isDivisibleByTwo ||
    isDivisibleByThree ||
    isDivisibleByFive ||
    isDivisibleByPrimeNumbers
  );
};
