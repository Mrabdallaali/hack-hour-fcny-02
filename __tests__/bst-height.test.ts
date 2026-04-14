import { describe, it, expect, beforeEach } from 'vitest';
import {
  BinarySearchTree,
  bstHeight,
  balanced,
} from '../challenges/bst-height';

describe('bstHeight', () => {
  let tree: BinarySearchTree;

  beforeEach(() => {
    tree = new BinarySearchTree(5);
  });

  it('should return -1 for an empty tree', () => {
    expect(bstHeight(null)).toBe(-1);
  });

  it('should return 0 for a single node tree', () => {
    expect(bstHeight(tree)).toBe(0);
  });

  it('should work for BSTs of height 1', () => {
    tree.left = new BinarySearchTree(3);
    expect(bstHeight(tree)).toBe(1);

    tree.right = new BinarySearchTree(5);
    expect(bstHeight(tree)).toBe(1);
  });

  describe('should work for BSTs of height > 1', () => {
    it('should work for BSTs of height 2', () => {
      tree.left = new BinarySearchTree(3);
      tree.left.left = new BinarySearchTree(1);
      expect(bstHeight(tree)).toBe(2);
    });

    it('should work for BSTs of height 3', () => {
      tree.left = new BinarySearchTree(3);
      tree.left.left = new BinarySearchTree(1);
      tree.left.left.right = new BinarySearchTree(2);
      expect(bstHeight(tree)).toBe(3);

      tree.left.left.left = new BinarySearchTree(0);
      expect(bstHeight(tree)).toBe(3);

      tree.right = new BinarySearchTree(8);
      expect(bstHeight(tree)).toBe(3);

      tree.right.right = new BinarySearchTree(9);
      expect(bstHeight(tree)).toBe(3);

      tree.right.right.left = new BinarySearchTree(10);
      expect(bstHeight(tree)).toBe(3);
    });

    it('should work for BSTs of height 4', () => {
      tree.right = new BinarySearchTree(2);
      tree.right.right = new BinarySearchTree(8);
      tree.right.right.left = new BinarySearchTree(10);
      tree.right.right.left.right = new BinarySearchTree(11);
      expect(bstHeight(tree)).toBe(4);

      tree.right.right.left.left = new BinarySearchTree(11);
      expect(bstHeight(tree)).toBe(4);
    });
  });
});

describe.skip('balanced', () => {
  let tree: BinarySearchTree;

  function createBalancedBST(depth: number): BinarySearchTree {
    // Create the current node with a random value
    const root = new BinarySearchTree(Math.floor(Math.random() * 1000));

    // Recursively create left and right subtrees
    if (depth > 0) {
      root.left = createBalancedBST(depth - 1);
      root.right = createBalancedBST(depth - 1);
    }

    return root;
  }

  beforeEach(() => {
    tree = new BinarySearchTree(10);
    tree.left = new BinarySearchTree(5);
    tree.left.left = new BinarySearchTree(3);
    tree.left.right = new BinarySearchTree(6);
    tree.right = new BinarySearchTree(14);
  });

  it('should return true for an empty tree', () => {
    expect(balanced(null)).toBe(true);
  });

  it('should return true for a single node tree', () => {
    expect(balanced(new BinarySearchTree(10))).toBe(true);
  });

  it('should return true for balanced trees', () => {
    expect(balanced(tree)).toBe(true);
  });

  it('should return false for trees that are unbalanced', () => {
    tree.left!.left!.left = new BinarySearchTree(1);
    expect(balanced(tree)).toBe(false);
  });

  it.skip('should work for large trees', () => {
    tree = createBalancedBST(18);
    expect(balanced(tree)).toBe(true);

    tree.left!.right = null;
    expect(balanced(tree)).toBe(false);
  });
});
