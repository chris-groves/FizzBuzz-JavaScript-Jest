# FizzBuzz with JavaScript and Jest

## Intro

Aim is to revise JavaScript and introduce myself to the Jest testing framework by test driving the FizzBuzz kata.

## What is FizzBuzz?

A small kata which requires the numbers 1 to 100 to be printed, with the following conditions:

1. If the number is divisible by 3, return "Fizz"
2. If the number is divisible by 5, return "Buzz"
3. If the number is divisible by 3 and 5, return "Fizzbuzz"
4. Otherwise simply return the number

## Setup

1. Create a directory for the project ```mkdir FizzBuzz-JavaScript-Jest```

2. Enter the newly created directory ```cd FizzBuzz-JavaScript-Jest```

3. Confirm Node is installed ```node -v```

4. Confirm npm command-line package is available ```npm -v```

5. Create a package.json file ```npm init -y```

6. Install Jest locally within only this directory ```npm install --save-dev jest```

Instructions are based on: https://medium.com/@ryanblahnik/setting-up-testing-with-jest-and-node-js-b793f1b5621e


## Run Practice test

1. Create 2 files in the main directory: 'sum.test.js' and 'sum.js'

2. Add the following to 'sum.test.js':
```
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

3. Add the below to 'sum.js':
```
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

4. Run test using: ```node_modules/.bin/jest```

5. To run tests whilst working: ```node_modules/.bin/jest --watch```

Guidance based on:
https://github.com/facebook/jest
https://medium.com/@ryanblahnik/setting-up-testing-with-jest-and-node-js-b793f1b5621e
