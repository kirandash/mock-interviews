/*
Qn:
There are 100 holes in line and rabbit can hide in one of the holes.

u can look at only one hole at a time. Every time you look at a hole, if rabbit is not in it then it jumps to the adjacent hole.

bonus: if u can provide the exact number of worse cases for 100 holes
*/

/*
Pseudocode:
- Start from left
- if true return index
- if false go to next index and check if rabbit is there return index else also check if rabbit at prev/next index and return prev/next index
- keep looping till end
*/
const findRabbitHole = (holes) => {
    for(let i = 0; i <holes.length; i++) {
        if(holes[i] === true){
            return i; 
        } else if(holes[i-1] === true) {
            return i - 1;
        } else if(holes[i+1] === true) {
            return i + 1;
        }
    }
    return null;
}

const myHoles = [null, null, null, null, null, null, null, true, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
const myHoles1 = [true, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
const myHoles2 = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, true];
console.log("Rabbit is at hole:" + findRabbitHole(myHoles))
console.log("Rabbit is at hole:" + findRabbitHole(myHoles1))
console.log("Rabbit is at hole:" + findRabbitHole(myHoles2))
// Time complexity: O(n)
// Space complexity: 1
