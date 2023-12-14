import { getAsArray } from "../input";
import { success } from "../utils/logger";

export default () => {
  const pyramid = getAsArray("./0018.txt").map((o) => o.split(" ").map(Number));

  const allSums = getSumsRecursive(pyramid);
  success(`Maximum sum: ${Math.max(...allSums)}`);
};

const getSumsRecursive = (
  pyramid: number[][],
  level = 0,
  currentIndex = 0,
  sum = 0
): number[] => {
  const row = pyramid[level]!;
  console.log(level, currentIndex);

  if (!row) {
    return [sum];
  }

  const num = row[currentIndex]!;

  return [...Array(2)].flatMap((_, i) =>
    getSumsRecursive(pyramid, level + 1, currentIndex + i, sum + num)
  );
};
