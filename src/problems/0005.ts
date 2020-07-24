import { success, end } from '../utils/logger';

export default () => {
  let num = 1;

  while (true) {
    if (isEvenlyDivisble(num)) {
      break;
    }

    num++;
  }

  success(`Answer: ${num}`);
  end();
};

const isEvenlyDivisble = (num: number) => {
  let isEven = true;

  for (let i = 1; i <= 20; i++) {
    if (num % i !== 0) {
      isEven = false;
      break;
    }
  }

  return isEven;
};
