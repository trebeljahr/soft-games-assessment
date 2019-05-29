if (typeof define !== "function") {
  var define = require("amdefine")(module);
}

define(function() {
  return {
    listFiles: function(data, dirName) {
      let out = [];
      //create recursive lookup function which takes the currentNode and a
      //possible subDir to match as params
      const recursive = (node, subDir) => {
        //checks if current dir object contains files object
        if (node.files) {
          //goes over each file entry within files object
          node.files.forEach(file => {
            //check if files is a new dir/object
            if (typeof file === "object") {
              //this stops passing the subDir param along
              //when it has found the subDir
              //because it should then start returning all the files
              //within the subdir, just as if the subdir was the original
              //node/data argument supplied to the function
              //because every further iteration should be within the subDir
              if (subDir === node.dir) {
                return recursive(file);
              }
              return recursive(file, subDir);
            }
            //if there is no subDir param in which to search for files -> simply
            //return every file found which is not a directory/object itself
            //if there is a subDir param, check if it matches the currentDir
            //only put files into return array if it does
            //the !subDir will evaluate to true all the time after the subDir
            //got found since further iterations get further down into but never
            //out of the subDir, meaning all the files found are within some dir
            //within the subdir
            else if (!subDir || subDir === node.dir) {
              out.push(file);
            }
          });
        }
      };
      //call recursive function
      recursive(data, dirName);
      return out;
    },

    permute: function(arr) {
      let out = [];
      //create recursive function which takes as arguments an array spliceArray from which
      //it splices values and an array builtArray into which it adds the spliced values
      const recursive = (spliceArray, builtArray) => {
        //traverse array from end to front
        for (let i = spliceArray.length - 1; i >= 0; i--) {
          //spread the argument arrays into copies
          //this is needed to not alter the original argument arrays because
          //they are needed multiple times - once for each iteration over i
          let spliceArrayCopy = [...spliceArray];
          let builtArrayCopy = [...builtArray];
          //this splices and then adds one of the elements within spliceArrayCopy to
          //builtArrayCopy, and then passes the altered copies of the spliceArray and
          //the builtArray into the recursive function to spawn a new
          //iteration... when the builtArrayCopy reaches the length of the original
          //array it gets pushed into the output as a valid permutation
          builtArrayCopy = builtArrayCopy.concat(spliceArrayCopy.splice(i, 1));
          if (builtArrayCopy.length === arr.length) {
            out.push(builtArrayCopy);
          } else {
            recursive(spliceArrayCopy, builtArrayCopy);
          }
        }
      };
      recursive(arr, []);
      return out;
    }
  };
});
