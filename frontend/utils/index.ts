export const declensionOfNum = (number: number, wordForms: string[]): string => {
  const hundredRemainder = number % 100;
  const tenRemainder = number % 10;

  if (hundredRemainder > 10 && hundredRemainder < 20) return wordForms[2];

  if (tenRemainder === 1) return wordForms[0];

  if (tenRemainder > 1 && tenRemainder < 5) return wordForms[1];

  return wordForms[2];
}
