// Problem Statement #

// Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first. You should populate the values of all nodes in each level from left to right in separate sub-arrays.

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};

const traverse = function(root) {
  
  // TODO: Write your code here
  const result = [];
  const queue = [root];

  if (!root) return []; // left node 

  while (queue.length > 0) { // enter while loop if it is not empty tree
    let queueLen = queue.length;
    let temp = []; // stores node on the level temporarily

    for (let i = 0; i < queueLen; i++) {
      const node = queue.shift();
      temp.push(node.value);

      if (node.left !== null) {
        queue.push(node.left);
      }

      if (node.right !== null) {
        queue.push(node.right);
      }
    }

    result.push(temp); // push nodes on level before moving on to the next level
    temp = [];
  }

  return result.reverse();
}

var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Reverse level order traversal: ${traverse(root)}`)