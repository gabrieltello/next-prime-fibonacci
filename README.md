# Next prime fibonacci

**Improvements**:

- Rather more descriptive names over short variable names, it makes easier to understand and mantain by colleages.
- isPrimeNumber function made "const" scince it's value will never change
- It can be reduced to the half the time complexity of the isPrimeNumber method using recurtion and taking the number as prime since half of the number is less than the divisor and the number is more than one.
- index.js:15 while(true) replaced with a "primeFibonacci" valu validation, it is more readable than having a "break" statement.
- index.js:16 variable "currentFibonacci" declared as "let" scince it's value is only needed in the block scope, so is not necessary to have it with function scope
- index.js:26 fibonacciTerms increment refactored to a primeFibonacci found validation in order to reuse that console.info and terms increment (avoid repeated code).
- console.warn replaced by console.info, it is not a big deal, but console.warn will produce a "stderr" message producing a "smelly code" at the end.
- isPrimeNumber and fibonacci turned into arrow functions, it is a good idea to use arrow functions for function expressions which just produces a value;
- fibonacci function shorted we are able to omit the curly braces and the return statement due to implicit return.