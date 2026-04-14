/*

Find the tallest height of a binary search tree.

Ex. the tallest height of:

       4
     /   \
    2     7
   / \     \
  1   3     9
           /
          8

is 3, because the tallest height of the tree connects the numbers 4 - 7 - 9 - 8
and has 3 links.

Notes:
  - A single node tree has a height of 0
  - An empty tree has a height of -1
*/

export class BinarySearchTree {
  value: number;
  right: BinarySearchTree | null;
  left: BinarySearchTree | null;

  constructor(value: number) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

export const bstHeight = (tree: BinarySearchTree | null): number => {
  return -1;
};

/*
  Extension:

  Write a function to check if a binary tree is balanced.
  A binary tree is balanced if for each node the heights of its subtrees differ by at most 1.

  Ex. 
        4                       4
      /   \                   /   \
     2     7                2       7
    / \     \             /  \     /  \
   1   3     9           1    3   5    9
            /                         /
           8                         8

  The tree on the left is not balanced, since the condition is violated for the subtrees of node 7.
    - the left subtree of node 7 has height -1 (since it is null)
    - the right subtree of node 7 has height 1 (9 -> 8)
    - diff = |1 - (-1)| = 2
    - the condition (diff <= 1) is false
  
  The tree on the right is balanced since the difference in height is never more than 1 for any given subtree.

  Notes:
    - A single node tree is balanced
    - An empty tree is balanced
 */

export const balanced = (tree: BinarySearchTree | null): number => {
  return -1;
};
