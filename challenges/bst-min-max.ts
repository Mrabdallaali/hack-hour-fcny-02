/*

Given the root of a binary search tree, determine the difference of the maximum
and minimum value.

Note that the function signature is NOT defined as a method on the
BinarySearchTree prototype. Instead, we provide the root as an argument to the
function.

Ex:

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

returns 8, becuase 9 - 1 = 8

*/

class BinarySearchTree {
  value: number;
  right: BinarySearchTree | null;
  left: BinarySearchTree | null;

  constructor(value: number) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

const bstMinMax = (root: BinarySearchTree): number => {
  return 0;
};

/*

Extension: (not necessarily related in technique to above problem, but
nevertheless still a BST problem)

Given a binary search tree (BST), find the lowest common ancestor (LCA) of two
given nodes "p" and "q" in the BST. Return the LCA node itself.

Ex:

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

The LCA of node 1 and node 3 is node 2.
The LCA of node 8 and node 9 is node 9.
The LCA of node 2 and node 8 is node 4.

*/

const lowestCommonAncestor = (
  root: BinarySearchTree | null,
  p: BinarySearchTree,
  q: BinarySearchTree
): BinarySearchTree | null => {
  return root || null;
};

export { BinarySearchTree, bstMinMax, lowestCommonAncestor };
