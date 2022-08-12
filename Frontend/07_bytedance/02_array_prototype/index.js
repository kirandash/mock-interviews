// Implement a function which extends Array.prototype
Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue;
    for(let i = 0; i < this.length; i++) {
        if(i === 0 && accumulator === undefined) {
            accumulator = this[0]
        } else {
            accumulator = callback(accumulator, this[i], i, this)
        }
    }
    return accumulator;
}

const arr = [1,2,3,4,5];
console.log(arr.myReduce((acc, item) => acc + item, 10));
console.log(arr.reduce((acc, item) => acc + item, 10));
