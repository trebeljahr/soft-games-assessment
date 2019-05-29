if (typeof define !== "function") {
  var define = require("amdefine")(module);
}

define(function() {
  return {
    valueAtBit: function(num, bit) {
      //getTheFullLengthBinaryString
      let res = num.toString(2);
      //split string into array of single bits
      res = res.split("");
      //convert bit strings into bit integers
      res = res.map(digit => parseInt(digit, 10));
      //return bit integer
      return res[res.length - bit];
    },

    base10: function(str) {
      //using the built in method
      let res = parseInt(str, 2);

      //my own implementation of similar functionality
      /*
      let res = 0;
      str = str.split("");
      str.forEach((digit, index) => {
        if (digit === "1") {
          res += Math.pow(2, str.length - 1 - index);
        }
      });
      */
      return res;
    },

    convertToBinary: function(num) {
      //built in version
      let out = num.toString(2);
      //pad the number from the left up to 8 digits
      out = out.padStart(8, "0");
      //and again I built my own ^^
      /*
      let out = "";
      for (let i = 7; i >= 0; i--) {
        let bUnit = Math.pow(2, i);
        if (num - bUnit >= 0) {
          num -= bUnit;
          out += "1";
        } else {
          out += "0";
        }
      }*/
      return out;
    },

    multiply: function(a, b) {
      let precision = 10; //number of decimal places of precision
      return (
        Math.round(Math.pow(10, precision) * a * b) / Math.pow(10, precision)
      );
    }
  };
});
