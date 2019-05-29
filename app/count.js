if (typeof define !== "function") {
  var define = require("amdefine")(module);
}

define(function() {
  return {
    count: function(start, end) {
      function increment() {
        if (start <= end) {
          //this part gave me lots of headaches, because I really wondered why
          //my console.log calls wouldnt work as expected...
          //seriously why did you change the way console.log behaves?
          console.log(start);
          start++;
        }
      }
      return {
        interval: setInterval(increment, 100),
        cancel: () => {
          clearInterval(this.interval);
          end = start;
        }
      };
    }
  };
});
