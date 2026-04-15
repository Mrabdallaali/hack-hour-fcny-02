/*

Given the root of a binary search tree, determine the sum of all the values.
Note that the function signature is NOT defined as a method on the
BinarySearchTree prototype. Instead, we provide the root as an argument to the
function.

*/

class BinarySearchTree {
  value: number;
  right: null | BinarySearchTree;
  left: null | BinarySearchTree;

  constructor(value: number) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

const bstSum = (root: BinarySearchTree): number => {
   if (root === null) return 0;
   
   const leftSum = bstSum(root.left)
   const rightSum = bstSum(root.right)

   return leftSum + rightSum + root.value
}


/*
  
  Extension:
  Given the root of a binary search tree, reverse the binary search tree in-place
  and return the root. Reverse the tree so that for each node, every number on the
  left is greater and every number on the right is lesser.
  
  For example, the original tree:
  
       4
     /   \
    2     7
   / \     \
  1   3     9
           /
          8
  
  reverses to:
  
       4
     /   \
    7     2
   /     / \
  9     3   1
   \
    8
  
  Do this in-place, so that we never use the BinarySearchTree constructor to
  create any new nodes in memory.
  
  Note that the function signature is NOT defined as a method on the
  BinarySearchTree prototype. Instead, we provide the root as an argument to the
  function.
  
  */

const bstReverse = (root: BinarySearchTree): BinarySearchTree => {
  return root;
};

export { BinarySearchTree, bstSum, bstReverse };
