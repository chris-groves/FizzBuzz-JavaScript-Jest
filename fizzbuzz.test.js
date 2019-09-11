const fizzbuzz = require('./fizzbuzz');

test('prints out the number 1', () => {
  expect(fizzbuzz()).toEqual(1);
});
