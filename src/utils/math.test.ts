import { numberToArr } from './math';

describe('numberToArr tests', () => {
  test('should split number into an array of digits (multi-digits)', () => {
    const arr = numberToArr(100);
    expect(arr).toEqual([1, 0, 0]);
  });

  test('should split number into an array of digits (single-digit)', () => {
    const arr = numberToArr(5);
    expect(arr).toEqual([5]);
  });
});
