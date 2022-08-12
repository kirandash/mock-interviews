// Given a list of points, find out if any four of them form a square. Return 'true' if possible, else 'false'
// Example: [[0, 0], [2, 0], [1, 1], [0, -1], [-1, -1], [0, 2], [0, 1], [1,0]] -> true

/**
 * Pseudocode - for solution that assumes only 4 points are given and are in order
 * distance b/w two points: distSq = (y2 - y1) * (y2 - y1) + (x2 - x1) * (x2 - x1)
 * check if distSq from 1 to 2 is > 0 and all rest of the sides(distSq) are equal and also the two diagonals(xsqrt(2)) are equal
 * Bruteforce for all combinations (For the original solution)
 */
const checkIsSqr = (p1, p2, p3, p4) => {
    // utility fn
    const distSq = (p1, p2) => (p2[0] - p1[0]) * (p2[0] - p1[0]) + (p2[1] - p1[1]) * (p2[1] - p1[1]);

    const permutations = (arr) => {
        if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
        return arr.reduce(
          (acc, item, i) =>
            acc.concat(
              permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
                item,
                ...val,
              ])
            ),
          []
        );
      };

    const check = (p1, p2, p3, p4) => {
        return distSq(p1, p2) > 0 && distSq(p1, p2) === distSq(p2, p3) && distSq(p2, p3) === distSq(p3, p4) && distSq(p3, p4) === distSq(p4, p1) && distSq(p1, p3) === distSq(p2, p4)
    }

    const allPermutations = permutations([p1, p2, p3, p4]);

    for(let permutation of allPermutations) {
        if(check(...permutation) === true) return true;
    }
    return false;
}

console.log(checkIsSqr([0, 0], [0,1], [1, 1], [1,0])); // true
console.log(checkIsSqr([0, 0], [0,1], [1,0], [1, 1])); // false
