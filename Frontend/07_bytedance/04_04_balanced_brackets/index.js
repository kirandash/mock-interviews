// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

/**
 * Pseudocode
 * create a stack to hold closing paranthesis
 * loop through the string
 * For every opening paranthesis, push closing paranthesis in stack
 * if closing paranthesis encountered, pop item from stack and compare if equal fine
 * if popped item is undefined or doesn't match then return false
 * if length of stack is zero return true
 * return false
 */
const isValid = function(s) {
    const stack = [];
    for(let char of s){
        if(char === "(") stack.push(")")
        else if(char === "{") stack.push("}")
        else if(char === "[") stack.push("]")
        else if (stack.length === 0 || stack.pop() !== char) return false; 
    }
    if(stack.length === 0) return true;
    return false;
}

console.log(isValid("()[]{}")); // true
console.log(isValid("()[]{}}")); // false