import { success, end } from '../utils/logger';

export default (): void => {
  const maxNum = 1000;
  let sum = 0;

  for (let i = 1; i < maxNum; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  success(`Answer: ${sum}`);
  end();
};
