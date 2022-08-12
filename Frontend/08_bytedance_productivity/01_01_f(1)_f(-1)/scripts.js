// Implement 5 different ways for f(1) and f(-1) to return -1 and 1 respectively
// Note: The implementation should have logical difference. Sytactical difference will not be considered as a solution
function f1(input) {
 return input * -1;
}
console.log(f1(1)); // -1
console.log(f1(-1)); // 1

function f2(input) {
    if(input === 1) return -1
    else if (input === -1) return 1
}
console.log(f2(1)); // -1
console.log(f2(-1)); // 1

function f3(input) {
    const arr = [null, -1];
    return arr.indexOf(input);
}
console.log(f3(1)); // -1
console.log(f3(-1)); // 1

function f4(input) {
    return -Math.sign(input); // reeturns 1 or -1 for positive or negative numbers
}
console.log(f4(1)); // -1
console.log(f4(-1)); // 1

function f5(input) {
    return String(input).length === 2 ? 1 : -1;
}
console.log(f5(1)); // -1
console.log(f5(-1)); // 1

function f6(input) {
    const str = String(input);
    return Number(
        str.startsWith("-") ? str.slice(1) : `-${str}`
    )
}
console.log(f6(1)); // -1
console.log(f6(-1)); // 1

function f7(input) {
    return input * ~0;
}
console.log(f7(1)); // -1
console.log(f7(-1)); // 1
