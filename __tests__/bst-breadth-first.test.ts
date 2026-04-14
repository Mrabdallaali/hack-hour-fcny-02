import { describe, it, expect, beforeEach } from 'vitest';
import { BST, GridNumber, bfs, minimumDistance }  from '../challenges/bst-breadth-first'
  
  describe('bfs', () => {
    let bst: BST, results: number[];
    const cb = (val: number) => {
      results.push(val);
    };
  
    beforeEach(() => {
      results = [];
    });
  
    it('handles single-depth binary search trees', () => {
      bst = new BST(6);
      bst.left = new BST(3);
      bst.right = new BST(10);
  
      bfs(bst, cb);
      expect(results).toEqual([6, 3, 10]);
    });
  
    it('handles arbitrarily deep binary search trees', () => {
      bst = new BST(4);
      bst.left = new BST(2);
      bst.right = new BST(7);
      bst.left.left = new BST(1);
      bst.left.right = new BST(3);
      bst.right.right = new BST(9);
      bst.right.right.left = new BST(8);
  
      bfs(bst, cb);
      expect(results).toEqual([4, 2, 7, 1, 3, 9, 8]);
    });
  });
  
  describe.skip('minimumDistance', () => {
    let grid: GridNumber[][];
  
    it('handles single-row and single-column grids', () => {
      grid = [[0, 0, 2, 0, 1, 0]];
      expect(minimumDistance(grid)).toBe(2);
  
      grid = [[0, 0, 0, 0, 1, 2, 0]];
      expect(minimumDistance(grid)).toBe(-1);
  
      grid = [[0], [2], [1], [1]];
      expect(minimumDistance(grid)).toBe(1);
  
      grid = [[0], [0], [0], [1], [2]];
      expect(minimumDistance(grid)).toBe(-1);
    });
  
    it('handles the general case', () => {
      grid = [
        [0, 0, 1, 1],
        [2, 0, 1, 0],
        [1, 0, 0, 0],
      ];
      expect(minimumDistance(grid)).toBe(1);
  
      grid = [
        [0, 0, 1, 1],
        [0, 0, 1, 2],
        [1, 0, 0, 0],
      ];
      expect(minimumDistance(grid)).toBe(6);
  
      grid = [
        [0, 0, 1, 1],
        [0, 0, 1, 2],
        [1, 0, 0, 1],
      ];
      expect(minimumDistance(grid)).toBe(-1);
    });
  });
