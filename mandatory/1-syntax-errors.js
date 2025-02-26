// There are syntax errors in this code - can you fix it to pass the tests?

//addNumbers adds numbers correctly
function addNumbers(a, b, c) {
  return a + b + c;
}
console.log(addNumbers(3, 4, 6));

//introduceMe function returns the correct string
function introduceMe(name, age)
{ 
  let message = `Hello, my name is ${name} and I am ${age} years old`;
  return message;
  }
console.log(introduceMe("Sonjide", 27));
  
//getTotal returns a string describing the total
function getTotal(a, b) {
  let total = a + b;
  return "The total is " + total ;
}
console.log(getTotal(23, 5))
/* 
===================================================
======= TESTS - DO NOT MODIFY BELOW THIS LINE =====

There are some Tests in this file that will help you work out if your code is working.

To run the tests for just this one file, type `npm test -- --testPathPattern 1-syntax-errors` into your terminal
(Reminder: You must have run `npm install` one time before this will work!)

===================================================
*/

test("addNumbers adds numbers correctly", () => {
  expect(addNumbers(3, 4, 6)).toEqual(13);
});

test("introduceMe function returns the correct string", () => {
  expect(introduceMe("Sonjide", 27)).toEqual(
    "Hello, my name is Sonjide and I am 27 years old"
  );
});

test("getTotal returns a string describing the total", () => {
  expect(getTotal(23, 5)).toEqual("The total is 28");
});
