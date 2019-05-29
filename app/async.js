if (typeof define !== "function") {
  var define = require("amdefine")(module);
}

define(["jquery"], function($) {
  return {
    async: async function(value) {
      const res = await value;
      return res;
    },

    manipulateRemoteData: async function(url) {
      //asynchronously fetch data and put it into json format
      const res = await fetch(url);
      const data = await res.json();
      //then get the names of the persons into an array
      //and finally sort the names in the array by alphabet
      const out = data.people.map(person => person.name).sort();
      return out;
    }
  };
});
