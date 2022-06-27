// Problem Statement #

// Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};


const find_minimum_depth = function(root) {
  // TODO: Write your code here
  if (!root) return 0; // no root return zero

  let min = Infinity;
  let level = 1;
  const queue = [root];

  while (queue.length) {
    const length = queue.length;

    for (let i = 0; i < length; i++) {
      const node = queue.shift();

      // when node is a leaf node, compare the current level with min
      if (!node.left && !node.right) {
        min = Math.min(min, level)
      }

      if (node.left) queue.push(node.left);

      if (node.right) queue.push(node.right);
    }

    level++;
  }

  return min;
};



var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)
root.left.left = new TreeNode(9)
root.right.left.left = new TreeNode(11)
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)
