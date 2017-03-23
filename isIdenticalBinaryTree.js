// CodeRust https://www.educative.io/collection/page/5642554087309312/5679846214598656/120004
// I: Two binary trees (root of each tree)
// O: Boolean for if the trees are identical
// C: O(n) time, O(h) memory -- h is height of the tree
// Hint: Use depth-first traversal & recursion

function isIdenticalBinaryTree(tree1, tree2){
  if(!tree1 && !tree2) // base case
    return true;
  if(tree1 && tree2){
    if(tree1.val === tree2.val){
      return isIdenticalBinaryTree(tree1.left, tree2.left) && isIdenticalBinaryTree(tree1.right, tree2.right)
    }
  }
  return false;
}

function Node(val){
  this.val = val;
  this.left = null;
  this.right = null;
}

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);
var node6 = new Node(6);
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;


var node11 = new Node(1);
var node22 = new Node(2);
var node33 = new Node(3);
var node44 = new Node(4);
var node55 = new Node(5);
var node66 = new Node(6);
node11.left = node22;
node11.right = node33;
node22.left = node44;
node22.right = node55;
node33.right = node66;
console.log(isIdenticalBinaryTree(node1, node11));
console.log(isIdenticalBinaryTree(node1, node1));

// function depthTraverse(node){
//   if(node.left === null && node.right === null)
//     return [node.val];
//   else if(node.left === null && node.right !== null)
//     return [node.val].concat(depthTraverse(node.right));
//   else if(node.left !== null && node.right === null)
//     return depthTraverse(node.left).concat([node.val]);
//   else
//     return depthTraverse(node.left).concat([node.val]).concat(depthTraverse(node.right));
// }
