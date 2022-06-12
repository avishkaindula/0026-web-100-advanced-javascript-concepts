const fs = require("fs");

function readFile() {
  let fileData;

  // fileData = fs.readFileSync("data.txt");
  // in readFileSync, the Sync keyword forces NodeJs through the file system package
  // to synchronously process and read that file.
  // Synchronous means: This operation must be completed before following code can be
  // started and executed.
  // Opposite of Sync is Async.
  // Asynchronous means this operations can be executed simultaneously with other operation.
  // It does NOT block the execution of following code.
  // If we try to read a "large file" through readFileSync, what happens is that the
  // execution of the following code will be blocked until that file was read in and parsed by NodeJS

  // fileData = fs.readFile("data.txt", function () {
  // This function will be executed by readFile once "processing of that file is done.""
  // We need to add a function like this if we want to process a file asynchronously.
  // console.log("File parsing done!");
  // });
  // This will read the file asynchronously.
  // Which means the following console.log("Hi there!") will be executed at the same time
  // where the data.txt file get read.
  // We even can't store readFile in a constant like fileData.
  // We should use a technique called "callback functions" for that.

  fs.readFile("data.txt", function (error, fileData) {
    // The parsed file data will only be available in this function.
    // This function is called a callback function since it will be
    // called by readFile for us once it's done with it's operation.
    // error parameter will hold information if reading the file fails.
    // fileData parameter will hold the data if parsing and reading the file did succeed.
    console.log("File parsing done!");
    console.log(fileData.toString());
  });

  // console.log(fileData.toString());
  // toString() Will convert the data on the txt file into a human readable text
  // JSON.parse() is used to convert JSON files
  // console.log(fileData.toString()); will also get executed way faster than readFile()
  // Therefor the code gives an "undefined" error.
  // So we need to add this line of code "inside the call-back function."

  console.log("Hi there!");
  // Hi there! will be output before the output of the async code
  // as console logging Hi there! is way faster than parsing Async code.
}

readFile();
