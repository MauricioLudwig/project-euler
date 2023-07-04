import { getLetterComposition } from "./0017";

const fixtures: [number, string, number][] = [
  [342, "three hundred and forty-two", 23],
  [115, "one hundred and fifteen", 20],
  [220, "two hundred and twenty", 19],
];

test.each(fixtures)("should return correct number of letters", (arg, s, n) => {
  expect(getLetterComposition(arg)).toEqual([s, n]);
});
