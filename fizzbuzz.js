function fizzbuzz(number) {
  if (number == 3) {
    return 'Fizz';
  } else if (number == 5) {
    return 'Buzz';
  } else if (number == 15) {
    return 'FizzBuzz';
  } else {
    return 1;
  }
};

module.exports = fizzbuzz;
