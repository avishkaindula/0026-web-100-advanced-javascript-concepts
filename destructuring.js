const input = ["Avishka", "Indula"];

// const firstName = input[0];
// const lastName = input[1];
// We can write the above code way shorter by using "array destructuring".
const [first, last] = input;
// constants are assigned to the same order of the items inside the array.

console.log(first);
// result => Avishka

console.log(last);
// result => Indula

// -----------------------------------------------------------------------------------------------------

const job = { title: "Developer", location: "New York" };

// const jobTitle = job.title;
// const jobLocation = job.location;
// We can also write the above code way shorter by using "array destructuring".
const { title, location } = job;
// We should name the constants by the same names of the properties.

console.log(title);
// result => Developer

console.log(location);
// result => New York

// We can assign different names than the real property names for the constants like this.
const { title: jTitle, location: jLocation } = job;

console.log(jTitle);
// result => Developer

console.log(jLocation);
// result => New York
