// const job1 = { title: "Developer", location: "New York", salary: 50000 };
// We've used "object literal notation" in here.
// Which means we create an object when we need it
// and we manually describe all the key-value pairs we need.
// But when we create multiple jobs using this way, it gets harder as we need
// to repeat the same code over and over again.
// const job2 = { title: "Doctor", location: "Sri Lanka", salary: 50000 };
// const job3 = { title: "Engineer", location: "Sri Lanka", salary: 50000 };

// console.log(new Date().toISOString());
// We create an object that describe a date like this.
// toISOString() is a method inside the Date.
// Date() is a constructor function or class.
// Constructor functions/classes are "blueprints" that allow you to build objects based on them.
// I think when we add the "new" keyword in front of the constructor function, that function becomes an object.

// If our application has multiple jobs with the same properties as the above job object
// but with different values, we can create a "blueprint" instead of creating multiple objects.
// date() is a good example for that kind of blueprint.
// the date() blueprint has "different values" but it's underlying code remains the same.

// We create blueprints by using the "class" Keyword.
class Job {
  // We Should start with an Upper Case character when we name the classes.
  constructor(jobTitle, place, salary) {
    // This will add a method to the class.
    // (methods are also "functions". So this method is also behaves like a function.)
    // This tells JS how to construct a concrete instant of this class
    // and how to create an object based on this blueprint, when we use this
    // job class in conjunction with the "new" keyword.
    // jobTitle is a parameter used in this method.
    this.title = jobTitle;
    this.location = place;
    this.salary = salary;
    // "this" keyword simply refers to the object that will be created.
    // Now we can create different properties for that object.
    // We can assign different parameters to that properties so that we can pass
    // different values for these properties through those parameters when we call this class outside this block.
  }
  // We should always add a constructor method at the beginning of the class.

  // After we add the constructor, other methods can be added like following.
  describe() {
    console.log(
      `I'm a ${this.title}, I work in ${this.location} and I earn ${this.salary}`
    );
    // We use "this" keyword in order to refer to the object.
    // In the constructor we use this keyword to refer to the object "that's about to be created."
    // And in all the other methods of this blueprint, this keyword refers to the "already created object."
  }
}

const job1 = new Job("Developer", "New York", 50000);
// This is how we create an object based on a blueprint.
// We should execute our Job class like a function() in order to create an object.
// And then we can pass the values for that class like this.
// The order of these values are the same order of the parameters on the "constructor"

// Now we can create multiple objects easily by using this blueprint.
const job2 = new Job("Doctor", "Sri Lanka", 50000);
const job3 = new Job("Engineer", "Sri Lanka", 50000);

console.log(job1);
console.log(job2);
console.log(job3);

job1.describe();
job2.describe();
job3.describe();
// We've used the same describe() method for all the jobs.
// Only the values are being changed.
