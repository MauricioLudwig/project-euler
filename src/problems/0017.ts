import { end, success } from "../utils/logger";

const map1: Record<number, string> = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
} as const;

const map2: Record<number, string> = {
  2: "twenty",
  3: "thirty",
  4: "forty",
  5: "fifty",
  6: "sixty",
  7: "seventy",
  8: "eighty",
  9: "ninety",
} as const;

export default () => {
  const sum = [...Array(1000)].reduce((acc, _, i) => {
    const [, count] = getLetterComposition(i + 1);
    return acc + count;
  }, 0);

  success(`Sum: ${sum}`);
  end();
};

export const getLetterComposition = (n: number): [string, number] => {
  const ns = n.toString().split("").map(Number).reverse();
  const str = getString(ns).join(" and ");
  const numOfLetters = str.split("").filter((o) => !/[\s\-]/.test(o)).length;

  return [str, numOfLetters];
};

const getString = (ns: number[]): string[] => {
  const [n1, n2, n3, n4] = ns;
  let s: string[] = [];

  if (n4) {
    s.push(`${map1[n4]} thousand`);
  }

  if (n3) {
    s.push(`${map1[n3]} hundred`);
  }

  if (n2) {
    if (n2 === 1) {
      s.push(map1[parseInt([n2, n1].join(""), 10)]);
    } else {
      let s2 = `${map2[n2]}`;

      if (n1 > 0) {
        s2 += `-${map1[n1]}`;
      }

      s.push(s2);
    }

    return s;
  }

  if (n1) {
    s.push(map1[n1]);
  }

  return s;
};
