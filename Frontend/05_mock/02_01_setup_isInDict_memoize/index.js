/**
 * Input: "cat", "car", "bar"
 *
 * function setup(input) - do as much work as possible to optimize
 *
 * function isInDict(word)
 */

// alternate would be to use class from ES6 but Qn asked for constructor fn
function setup(input) {
  this.dict = input;
  // cache for memoization
  this.cache = {};
  this.isInDict = function (word) {
    if (word in this.cache) {
      console.log("return cached result");
      return this.cache[word];
    } else {
      console.log("return calculated result");
      const result = this.dict.includes(word);
      this.cache[word] = result;
      return result;
    }
  };
}

let set1 = new setup(["cat", "car", "bar"]);
console.log(set1.isInDict("cat")); // true
console.log(set1.isInDict("cat")); // true
console.log(set1.isInDict("rat")); // false

// const memoize = (fn) => {
//     const cache = {};
//     return function(...args) {
//         if(args[0] in cache){
//             console.log("return cached result");
//             return cache[args[0]]
//         } else {
//             console.log("return calculated result");
//             const result = fn(args);
//             cache[args[0]] = result;
//             return result;
//         }
//     }
// }

// TODO: Check for binding here
// function setup(input) {
//     this.dict = input;
//     this.isInDict = function (word) {
//         console.log(this)
//       return this.dict.includes(word);
//     };
//   }
