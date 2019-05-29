if (typeof define !== "function") {
  var define = require("amdefine")(module);
}

define(function() {
  return {
    argsAsArray: function(fn, arr) {
      return fn(...arr);
    },

    speak: function(fn, obj) {
      fn = fn.bind(obj);
      return fn();
    },

    functionFunction: function(str) {
      return arg => str + ", " + arg;
    },

    makeClosures: function(arr, fn) {
      return arr.map(elem => () => fn(elem));
    },

    partial: function(fn, str1, str2) {
      return punctuation => fn(str1, str2, punctuation);
    },

    useArguments: function() {
      const args = Array.from(arguments);
      return args.reduce((total, elem) => total + elem);
    },

    callIt: function(fn) {
      let args = Array.from(arguments);
      args = args.slice(1);
      return fn(...args);
    },
    partialUsingArguments: function(fn) {
      let staticargs = Array.from(arguments);
      staticargs = staticargs.slice(1);
      return function() {
        let args = Array.from(arguments);
        return fn(...staticargs, ...args);
      };
    },

    curryIt: function(fn) {
      return x => y => z => (x / y) * z;
    }
  };
});
