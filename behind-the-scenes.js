const hobbies = ["Sports", "Cooking"];

hobbies.push("Reading");

console.log(hobbies);
// Result => ["Sports", "Cooking", "Reading"]
// Arrays and objects are stored in a special kind of memory. (actually arrays are also objects) => these are Reference values
// numbers, strings, booleans are stored in a different kind of memory. => these are primitive values
// When we create an array and store it in a constant, what we're actually storing is not the values of the array,
// but a pointer to the "address" of that array in memory.
// That's why we could change the values of the array using .push even when the array is stored in a constant.
// But in primitive values, the value itself is saved in the constant.

// hobbies = ["Sleeping", "Chess"];
// This won't be allowed, because we're trying to assign a "new array" to hobbies constant, not "values"

const person = { age: 21 };

function getAdultYears(p) {
  p.age = p.age - 18;
  return p.age;
}

// console.log(getAdultYears(person));
// result => 3
// console.log(person);
// result => { age: 3 }
// The actual age value inside the person object has changed.
// It has happened because objects are also reference values just like arrays.

// function getAdultYears(p) {
//   return p.age - 18;
// }
// console.log(person);
// result => { age: 21 }
// In here the value of the object hasn't changed
// because we don't affect the p.age by using a = sign in the function.

// console.log(getAdultYears({ age: person.age }));
// result => 3
// console.log(person);
// result => { age: 21 }
// As we could see, if we execute the function like this, the value of person.age hasn't changed.

console.log(getAdultYears({ ...person }));
// result => 3
console.log(person);
// result => { age: 21 }
// This is another use case of the spread operator.
// in objects, spread operators pulls out all the key value pairs off the object and gives a list of key value pairs.
// If we do that in between curly braces we create a "new object",
// which gets a list of all the key value pairs of another object.
// So we get a new object in memory with a new address.
// It's like copying an object and creating a brand new object.
// So it doesn't change the original value of the age of the original person object 
