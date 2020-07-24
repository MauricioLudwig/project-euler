import { success, end } from '../utils/logger';

export default () => {
  let addSum = 0;
  let sqSum = 0;

  for (let i = 1; i <= 100; i++) {
    addSum += i;
    sqSum += Math.pow(i, 2);
  }

  success(`Answer: ${Math.pow(addSum, 2) - sqSum}`);
  end();
};
