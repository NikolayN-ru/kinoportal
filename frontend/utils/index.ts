export const declensionOfNum = (
  number: number,
  wordForms: string[]
): string => {
  const hundredRemainder = number % 100;
  const tenRemainder = number % 10;

  if (hundredRemainder > 10 && hundredRemainder < 20) return wordForms[2];

  if (tenRemainder === 1) return wordForms[0];

  if (tenRemainder > 1 && tenRemainder < 5) return wordForms[1];

  return wordForms[2];
};

export const convertAmountWithMillionsToString = (amount: number): string => {
  let result: string;

  const millions = Math.trunc(amount / 1000000);
  result = millions ? `${millions} млн` : "";

  let reminder = amount % 1000000;
  const thousands = Math.trunc(reminder / 1000);

  if (result && thousands) {
    return `${result} ${thousands} тыс`;
  }

  if (result) {
    return result;
  }

  if (thousands) {
    return `${thousands} тыс`;
  }

  return `${amount}`;
};

export const convertAmoutWithTenthsToString = (amount: number): string => {
  return String(amount).replace(".", ",");
};

export const capitalizeFirstLetter = (string: string): string => {
  return string.replace(string[0], string[0].toUpperCase());
};
