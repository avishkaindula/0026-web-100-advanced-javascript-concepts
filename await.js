const fs = require("fs/promises");

// The following concepts only apply to promises.
// This a technique to "convert async code into sync code."
// We might need these kind of conversions as some packages doesn't give sync operations.
// Instead they only give async operations.
// Therefore, we might have some scenarios that we need to convert those async code into sync code.
// Lets assume the following readFile function preforms only "one" long taking async operation.

async function readFile() {
  // First of all, we need to convert this readFile() function into an async function
  // by adding "async" keyword in front of it.
  // Once we do that, this function will automatically "return" a promise even though we
  // don't have a return statement in the function.
  let fileData;
  try {
    fileData = await fs.readFile("data.txt");
    // We can add "await" keyword in front of any method that returns a promise.
    // When we add await, we can get rid of "then" and instead store that result in a "variable." (fileData)
    // await will allow us to go back to a style that looks like sync code
    // even though we're still having a async operation under the hood.
  } catch (error) {
    console.log(error);
    // We can now use try catch to catch errors because the above code behaves like sync code.
    // The error parameter in here gives us access to the "error object produced automatically by readFile."
  }
  // The following code won't get executed until the execution of the above code is finished.
  // Therefore, the above code behave like sync code.

  console.log("File parsing done!");
  console.log(fileData.toString());

  console.log("Hi there!");
}

readFile();
