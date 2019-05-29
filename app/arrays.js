if (typeof define !== "function") {
  var define = require("amdefine")(module);
}

define(function() {
  return {
    indexOf: function(arr, item) {
      return arr.findIndex(elem => elem === item);
    },

    sum: function(arr) {
      return arr.reduce((elem1, elem2) => elem1 + elem2);
    },

    remove: function(arr, item) {
      let out = arr.filter(elem => elem !== item);
      return out;
    },

    removeWithoutCopy: function(arr, item) {
      let index = arr.findIndex(elem => elem === item);
      //map over every occurrence of item => if no more occurrences loop stops
      while (index !== -1) {
        //operates on array in place => therefore no copy
        //usually I would prefer methods like map and filter over this though...
        arr.splice(index, 1);
        //find more occurrences if there are any left - if not, loop stops
        index = arr.findIndex(elem => elem === item);
      }
      return arr;
    },

    append: function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate: function(arr) {
      arr.pop();
      return arr;
    },

    prepend: function(arr, item) {
      arr.splice(0, 0, item);
      return arr;
    },

    curtail: function(arr) {
      arr.splice(0, 1);
      return arr;
    },

    concat: function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert: function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count: function(arr, item) {
      return arr.filter(elem => elem === item).length;
    },

    duplicates: function(arr) {
      let out = [];
      //go over each element in the array
      arr.forEach((target, index) => {
        if (
          //find multiple occurrences of elements of array
          arr.filter(duplicate => target === duplicate).length > 1 &&
          //if it already exists in out array - skip it
          out.indexOf(target) === -1
        ) {
          //splice occurence out of array and push it into out
          out.push(arr.splice(index, 1)[0]);
        }
      });
      return out;
    },

    square: function(arr) {
      return arr.map(elem => elem * elem);
    },

    findAllOccurrences: function(arr, target) {
      /*
      //first idea
      let index = arr.findIndex(elem => elem === target);
      let indecesOfOccurrences = [];
      //loop over arry as long as target is still found
      while (index !== -1) {
        //fill index of found target with null, which
        //keeps the length of the array constant,
        //while removing the target occurence from the array
        arr.splice(index, 1, null);
        indecesOfOccurrences.push(index);
        //stops loop if target is not in array -> findIndex returns -1
        //and while loop terminates
        index = arr.findIndex(elem => elem === target);
      }*/
      //overall bad solution => runs over every element in array
      //again and again for each occurrence => bad performance for large arrays
      //especially when there are many occurrences of target

      //much nicer and cleaner solution using forEach
      let indecesOfOccurrences = [];
      arr.forEach((elem, index) => {
        if (elem === target) {
          indecesOfOccurrences.push(index);
        }
      });
      return indecesOfOccurrences;
    }
  };
});
