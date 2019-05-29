if (typeof define !== "function") {
  var define = require("amdefine")(module);
}

define(function() {
  return {
    fizzBuzz: function(num) {
      if (typeof num !== "number") {
        return false;
      }
      let out = "";
      if (num % 3 === 0) {
        out += "fizz";
      }
      if (num % 5 === 0) {
        out += "buzz";
      }
      //if neither divisible by 3 nor 5 this should run
      if (out.length === 0) {
        return num;
      }
      return out;
      // write a function that receives a number as its argument;
      // if the number is divisible by 3, the function should return 'fizz';
      // if the number is divisible by 5, the function should return 'buzz';
      // if the number is divisible by 3 and 5, the function should return
      // 'fizzbuzz';
      //
      // otherwise the function should return the number, or false if no number
      // was provided or the value provided is not a number
    }
  };
});
