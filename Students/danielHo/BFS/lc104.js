// Problem#

// Given a binary tree, find its maximum depth (or height).

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}


function find_maximum_depth(root) {
  //Write Code Here
  if (!root) return 0 // leaf node

  let maxLeft = find_maximum_depth(root.left);
  let maxRight = find_maximum_depth(root.right);

  return Math.max(maxLeft, maxRight) + 1; // add 1 for the current node
}


const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree Maximum Depth: ${find_maximum_depth(root)}`);

//          12
//        7     1
//           10    5

root.left.left = new TreeNode(9);
root.right.left.left = new TreeNode(11);
console.log(`Tree Maximum Depth: ${find_maximum_depth(root)}`);

//          12
//        7      1
//    9       10    5
//          11