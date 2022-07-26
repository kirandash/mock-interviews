/**
 * Input: "cat", "car", "bar"
 *
 * function setup(input) - do as much work as possible to optimize
 *
 * function isInDict(word)
 *
 * WildCard
 * isInDict("*at") // true
 * isInDict("cr*") // false
 */

// alternate would be to use class from ES6 but Qn asked for constructor fn
function setup(input) {
  this.dict = input;

  this.isInDict = function (word) {
    // code optimization
    if (this.dict[word] !== undefined) {
      // O(1) - best case when there is exact match
      return true;
    }

    // REGEXP Check - O(n)
    return this.dict.some((dictWord) => {
      const regexTemplate = word.replace(/\*/g, "."); // . is for any in regex Note: replaceAll() can be used in ES12+
      const regex = new RegExp(`^${regexTemplate}$`);
      return regex.test(dictWord);
    });
  };
}

let set1 = new setup(["cat", "car", "bar"]);
console.log(set1.isInDict("cat")); // true
console.log(set1.isInDict("cat")); // true
console.log(set1.isInDict("rat")); // false
console.log("--WILDCARD--");
console.log(set1.isInDict("*at")); // true
console.log(set1.isInDict("cr*")); // false
console.log(set1.isInDict("*a*")); // true
