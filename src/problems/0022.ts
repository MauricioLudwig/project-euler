import { getAsSingleLine } from '../input';
import { success, end } from '../utils/logger';

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

export default (): void => {
  const names = getAsSingleLine('0022.txt')
    .replace(/["]/g, '')
    .split(',')
    .sort();

  const score = names.reduce((acc, curr, i): number => {
    return acc + getNameScore(curr) * (i + 1);
  }, 0);

  success(`Answer: ${score}`);
  end();
};

const getNameScore = (name: string): number =>
  name.split('').reduce((acc, curr) => {
    const i = alphabet.indexOf(curr.toLowerCase());

    if (i === -1) {
      throw new Error('No sequence found.');
    }

    return acc + i + 1;
  }, 0);
