// const fs = require("fs");

// function readFile() {
//   const fileData = fs.readFileSync("data.json");
//   console.log("Hi there!");
// }

// readFile();
// The above code will fail as there's no data.json file
// The code stops executing at that line.
// So console.log("Hi there!"); won't get executed to.

const fs = require("fs");

function readFile() {
  try {
    const fileData = fs.readFileSync("data.json");
  } catch {
    console.log("An error occurred!");
  }
  // console.log(fileData);
  // We can't console log fileData like this because fileData is defined inside the "try" block
  // and we console log fileData "outside" the block.
  console.log("Hi there!");
}

readFile();
// result => An error occurred! , Hi there!
// The try catch construct will try to execute what's inside try and
// if it fails, it gives the output inside the catch.
// And the code thereafter will execute just fine.

// Scoping means variables, constants and functions can only be used in "certain places.""
// In nodeJS, we could use modules.exports to export the functions which then can be used in different files.
// In browser side JS, we can simply add the JS scripts to the HTML files and can be used in anywhere thereafter.
// But there's a different kind of scoping that applies to both browser side JS and NodeJS.
// The most important thing to note about scoping is that constants, functions and variables are only available
// in the "block" where you define them.
// "Block" is a section of code that's wrapped by curly braces with the exception of creating an object.

function readFileAgain() {
  let fileData;
  try {
    fileData = fs.readFileSync("data.json");
    // constants, functions and variables are also available inside the "nested" blocks
    // to the parent blocks where those constants, functions and variables are defined.
  } catch {
    console.log("An error occurred!");
  }
  console.log(fileData);
  // This code would work because fileData is defined inside the same block where
  // console.log(fileData) is also defined.
  console.log("Hi there!");
}

readFileAgain();

function readFileOverAgain() {
  let fileData;
  try {
    const fileData = fs.readFileSync("data.json");
    // This is an example for "shadowing" a variable.
    // So the fileData doesn't respond to the fileData that was created above the try block.
    // If you create constant, variables or functions with the same name, but in different scopes (blocks),
    // then defining the names like that is allowed.
  } catch {
    console.log("An error occurred!");
  }
  console.log(fileData);
  // This fileData response to the fileData That was created in the beginning of the function.
  console.log("Hi there!");
}

readFileOverAgain();
