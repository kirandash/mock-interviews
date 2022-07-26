// Invert a tree
// node: {value: 5, left: {...}, right: {...}} Each node has a value and left and right obj. Left and right can be null
// By inverting each nodes left and right value should be swapped
const invertTree = (node) => {
  // Swap and recursion on child left, right nodes
  // Base case to stop recursion
  if(node.left === null && node.right === null) return;
  // saving in variable for swap
  let temp = node.left;
  // swap
  node.left = node.right;
  node.right = temp;
  // recursion on the child nodes
  invertTree(node.left);
  invertTree(node.right);
};

const tree = {
  value: 1,
  left: {
    value: 2,
    left: { value: 4, left: null, right: null },
    right: { value: 5, left: null, right: null },
  },
  right: {
    value: 3,
    left: { value: 6, left: null, right: null },
    right: { value: 7, left: null, right: null }
  }
};

invertTree(tree)
console.log(tree);
