if (typeof define !== "function") {
  var define = require("amdefine")(module);
}

define(function() {
  return {
    createModule: function(str1, str2) {
      let out = {
        name: str2,
        greeting: str1,
        sayIt: function() {
          return this.greeting.concat(", ", this.name);
        }
      };
      return out;
    }
  };
});
