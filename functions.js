// -------------------------------------------------------------------------------------------------------

function greetUser(greetingPrefix, userName = "user") {
  // userName = "user" is a default parameter
  // Default parameters hold "optional" values in case the user doesn't provide any value.
  // The default parameters should come at the end of the parameters list.
  console.log(greetingPrefix + " " + userName + "!");
}

greetUser("Hello", "Indula");

greetUser("Hi");
// if there's no "default value" for the parameter as userName = "user",
// then the above code gives an output like this => Hi undefined!
// This is a special JS value of type "undefined."
// ("null" is also another JS value type which will be shown later.)
// As there's a value set as userName = "user",
// this code actually gives an output like this => Hi user!

// ---------------------------------------------------------------------------------------------------

// function sumUp(num1, num2, num3) {
//   return num1 + num2 + num3;
// }
// console.log(sumUp(1, 2));
// The above code gives the result like this => NaN
// "NaN" is also a special value like undefined.
// NaN means => Not a Number
// We've provided two values for the function
// But the function actually need 3 values.
// That's why we got the output as NaN.
// The 3rd value is automatically set as "undefined"
// As undefined is not a "number", the output is given as NaN

// function sumUp(num1, num2, num3 = 0) {
//   return num1 + num2 + num3;
// }
// console.log(sumUp(1, 2));
// The above code gives the output as => 3

// function sumUp(numbers) {
//   let result = 0;

//   for (const number of numbers) {
//     result += number;
//   }

//   return result;
//   // This function will accept an "array" of numbers as values.
// }
// console.log(sumUp([1, 2, 4, 5, 6]));
// We need to wrap the values we provide inside a [] as these values is an array.

function sumUp(...numbers) {
  // ... means this function accepts any amount of parameters.
  // These are known as "rest parameters" or "rest arguments"
  // And all those parameters will then be merged into an array behind the scenes
  // So we don't need to provide the values as an array when we execute this function.
  let result = 0;

  for (const number of numbers) {
    result += number;
  }

  return result;
  // This function will accept an "array" of numbers as values.
}
console.log(sumUp(1, 2, 4, 5, 6, 3, 7, 8));
// We don't provide the values as an array in here.
// Instead we just input the values separated by a coma.

const inputNumbers = [1, 2, 4, 5, 6, 3, 7, 8];
console.log(sumUp(inputNumbers));
// result => 01,2,4,5,6,3,7,8

console.log(sumUp(...inputNumbers));
// result => 36
// The 3 dots in ...inputNumbers will convert the array into a normal list of values.
// So the function can accept those values without any problem.
// The 3 dots here is called a "spread operator."

// ---------------------------------------------------------------------------------------------------

console.dir(sumUp);
// if we console.dir a function inside a browser console,
// we can see that Functions are also "objects"
// As we can see there, a function has some properties which are inferred automatically.
// sumUp.someProperty = 32;
// We can add some custom properties to a function like this if we need to.
