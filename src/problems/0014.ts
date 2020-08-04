import { success, end } from "../utils/logger";

export default (): void => {
  let maxSequence = 0;
  let number = 1e6 - 1;

  for (let i = number; i > 1; i--) {
    let n = i;
    let sequence = 1;

    while (n !== 1) {
      n = n % 2 === 0 ? evenRule(n) : oddRule(n);
      sequence++;
    }

    if (sequence > maxSequence) {
      maxSequence = sequence;
      number = i;
    }
  }

  success(`Answer: ${number}`);
  end();
};

const evenRule = (n: number): number => n / 2;
const oddRule = (n: number): number => 3 * n + 1;
