if (typeof define !== "function") {
  var define = require("amdefine")(module);
}

define(function() {
  return {
    containsNumber: function(str) {
      return /\d/.test(str);
    },

    containsRepeatingLetter: function(str) {
      let regex = /([a-zA-z])\1+/;
      return regex.test(str);
    },

    endsWithVowel: function(str) {
      return /[AOUIEaouie]$/.test(str);
    },

    captureThreeNumbers: function(str) {
      let match = str.match(/\d{3}/);
      return !!match ? match[0] : false;
    },

    matchesPattern: function(str) {
      let regex = /^\d{3}-\d{3}-\d{4}$/;
      return regex.test(str);
    },
    isUSD: function(str) {
      //this one was fun!
      //\$(\d{1,3}) looks for any combination of $ followed by 1-3 digits
      //(\,\d{3})* followed by any number of ,XXX combinations
      //ending with either ,XXX or .XX combination
      let regex = /^\$(\d{1,3})(\,\d{3})*(\,\d{3}|\.\d{2})$/;
      return regex.test(str);
    }
  };
});
