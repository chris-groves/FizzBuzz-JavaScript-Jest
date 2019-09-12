const fizzbuzz = require('./fizzbuzz');

test('returns the number 1', () => {
  expect(fizzbuzz(1)).toEqual(1);
});

test('returns "Fizz" for the number 3', () => {
  expect(fizzbuzz(3)).toEqual('Fizz');
});

test('returns "Buzz" for the number 5', () => {
  expect(fizzbuzz(5)).toEqual('Buzz');
});

// test('prints out the numbers 1 to 100', () => {
//   var value = this.array[0]
//   expect(value).toEqual(1);
// });
