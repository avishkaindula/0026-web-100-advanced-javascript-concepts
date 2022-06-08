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
