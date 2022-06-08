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
  console.log("Hi there!");
}

readFile();
// result => An error occurred! , Hi there!
// The try catch construct will try to execute what's inside try and
// if it fails, it gives the output inside the catch.
// And the code thereafter will execute just fine.
