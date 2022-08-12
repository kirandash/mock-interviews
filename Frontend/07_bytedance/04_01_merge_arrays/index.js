const a1 = [1,2,3,4,5];
const b1 = [2,3,4,5,6];

const mergeArr = (arr1, arr2) => [...new Set(arr1.concat(arr2))];
console.log(mergeArr(a1, b1));