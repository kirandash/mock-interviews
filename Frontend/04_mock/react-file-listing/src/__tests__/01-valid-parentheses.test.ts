/*
## Valid Parentheses

Write a function that takes a string of parentheses,
and determines if the order of the parentheses is valid.
The function should return true if the string is valid,
and false if it's invalid.

### Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

### Constraints
0 <= input.length <= 100
*/

/*

- left paren in beginning is valid
- right paren in beginning is not valid

*/

function validParentheses(str: String) {
  /**
   * Pseudocode:
   * Initialize a stack
   * Loop through the string of brackets
   * If we encounter an opening bracket, push the corresponding closing bracket to the stack
   * If we encounter a closing bracket, check the stack: if it is empty then invalid. otherwise pop the last item from stack and if it does not match then invalid
   * End of the loop if stack length is zero: then valid
   * Otherwise invalid
   */
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (char === "(") {
      stack.push(")");
    } else if (char === "{") {
      stack.push("}");
    } else if (char === "[") {
      stack.push("]");
    } else if(stack.length === 0 || stack.pop() !== char) {
      return false;
    }
  }
  if (stack.length === 0) return true;
  return false;
}

// describe.skip or fit()
describe("tests", () => {
  it(`values: "("`, () => expect(validParentheses("(")).toBe(false));
  it(`values: ")"`, () => expect(validParentheses(")")).toBe(false));
  it(`values: ""`, () => expect(validParentheses("")).toBe(true));
  it(`values: "()"`, () => expect(validParentheses("()")).toBe(true));
  it(`values: "())"`, () => expect(validParentheses("())")).toBe(false));
  it(`values: "(){})"`, () => expect(validParentheses("(){})")).toBe(false));
  it(`values: "(){}()"`, () => expect(validParentheses("(){}()")).toBe(true));
});

export default {};
