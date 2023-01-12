module.exports = function toReadable (number) {
  const unitStrVersion = {
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
  };
  
  const dozenStrVersion = {
    '2': 'twenty',
    '3': 'thirty',
    '4': 'forty',
    '5': 'fifty',
    '6': 'sixty',
    '7': 'seventy',
    '8': 'eighty',
    '9': 'ninety',
  };
  
  const digitExceptions = {
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen'
  }

  let units = 0;
  let dozens = 0;
  let hundreds = 0;
  let result = [];

  if (number < 0 || number > 999) {
    return;
  }

  if (number === 0) {
    return 'zero';
  }
  
  units = number % 10;

  if (number >= 10) {
    dozens = Math.floor(number / 10) % 10;
  }

  if (number >= 100) {
    hundreds = Math.floor(number / 100) % 10;
  }

  if (hundreds > 0 && typeof unitStrVersion[String(hundreds)] !== "undefined") {
    result.push(`${unitStrVersion[String(hundreds)]} hundred`);
  }

  if (dozens > 0 && typeof unitStrVersion[String(dozens)] !== "undefined") {
    if (dozens === 1) {
        result.push(`${digitExceptions[dozens + '' + units]}`);

        return result.join(' ');
    } else if (dozens >= 2 && dozens <= 9) {
        result.push(dozenStrVersion[String(dozens)]);
    }
  }

  if (units > 0 && typeof unitStrVersion[String(units)] !== "undefined") {
    result.push(`${unitStrVersion[String(units)]}`);
  }

  return result.join(' ');
}
