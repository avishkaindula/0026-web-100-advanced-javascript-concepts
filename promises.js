const fs = require("fs/promises");
// promises in an build in package
// fs/promises will give us "promise versions" of file system methods.

function readFile() {
  let fileData;

  // fs.readFile("data.txt", function (error, fileData) {
  //   console.log("File parsing done!");
  //   console.log(fileData.toString());

  //   // We can insert another callback function inside this function that does another async task
  //   // We can even add another callback function inside that function to.
  //   // These kind of code is known as Nested Callback functions.
  //   // It's also refereed as "callback hell" as that code is way harder to read.
  //   // "promises" would be an alternative for that.
  // });

  fs.readFile("data.txt").then(function (fileData) {
    console.log("File parsing done!");
    console.log(fileData.toString());
  });
  // If we import the promises package, we don't need to add a callback function anymore.
  // Instead readFile now returns a so-called promise, which is simply a kind of object
  // that's baked into browser side JS and NodeJS.
  // It's a standardized object with certain properties and methods.
  // then() is also a method inside the promises package.
  // promises always have a then() method simply because teh promise blueprint
  // defines such a then method in that blueprint.
  // If we write our code this way, it's way easier to organize the code
  // than nested callback functions.

  // fs.readFile("input-data.csv")
  //   .then(function (data) {
  //     const cleanedData = cleanData(data);
  //     return storeDataInDatabase(cleanedData);
  //   })
  //   .then(function (result) {
  //     if (result.changedData) {
  //       return confirmDataChange();
  //     }
  //   })
  //   .then(function (done) {
  //     if (done) {
  //       res.render("success");
  //     }
  //   });
  // This is an example for nested promises.
  // This is way more cleaner and easier to read than nested callbacks.

  console.log("Hi there!");
}

readFile();
