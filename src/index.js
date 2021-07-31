module.exports = function toReadable (number) {
  const ones = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
  }

  const teens = {
    '1': 'eleven',
    '2': 'twelve',
    '3': 'thirteen',
    '4': 'fourteen',
    '5': 'fifteen',
    '6': 'sixteen',
    '7': 'seventeen',
    '8': 'eighteen',
    '9': 'nineteen'
  }

  const tens = {
      '1': 'ten',
      '2': 'twenty',
      '3': 'thirty',
      '4': 'forty',
      '5': 'fifty',
      '6': 'sixty',
      '7': 'seventy',
      '8': 'eighty',
      '9': 'ninety',
  }

  let digits = {};
  let num = number;
  digits.third = num % 10;
  num = (num - num % 10) / 10;
  digits.second = num % 10;
  num = (num - num % 10) / 10;
  digits.first = num % 10;

  let resString = '';
  if (number === 0) {
    resString = 'zero';
  } else if (digits.second === 0 && digits.third > 0) {
    resString = ones[String(digits.third)];
  } else if (digits.second === 1 && digits.third > 0) {
    resString = teens[String(digits.third)];
  } else if (digits.second > 0 && digits.third === 0) {
    resString = tens[String(digits.second)];
  } else if (digits.second > 1 && digits.third > 0) {
    resString = `${tens[String(digits.second)]} ${ones[String(digits.third)]}`
  }
  if (digits.first > 0 && digits.second === 0 && digits.third === 0) {
      resString = `${ones[String(digits.first)]} hundred`;
  } else if (digits.first > 0 && (digits.second > 0 || digits.third > 0)) {
      resString = `${ones[String(digits.first)]} hundred ${resString}`;
  }

  return resString;
}
