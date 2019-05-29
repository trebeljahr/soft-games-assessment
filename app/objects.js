if (typeof define !== "function") {
  var define = require("amdefine")(module);
}

define(function() {
  return {
    alterContext: function(fn, obj) {
      fn = fn.bind(obj);
      return fn();
    },

    alterObjects: function(constructor, greeting) {
      constructor.prototype.greeting = greeting;
      return constructor;
    },

    iterate: function(obj) {
      //map over the object entries joining key and value together
      //into strings separated by ": "
      return Object.entries(obj).map(elem => elem.join(": "));
    }
  };
});
