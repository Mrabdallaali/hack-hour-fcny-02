import { describe, it, expect } from 'vitest';
import { Node, kthToLastNode } from '../challenges/kth-to-last-node';

describe('kth-to-last-node', () => {
  describe('should work with a single node', () => {
    const a = new Node('A');

    it('should return undefined when k === 0', () => {
      expect(kthToLastNode(0, a)).toBeUndefined();
    });

    it('should return undefined when k is greater than the length of the list', () => {
      expect(kthToLastNode(2, a)).toBeUndefined();
    });

    it('should return the head node if k is equal to the length of the list', () => {
      expect(kthToLastNode(1, a)).toBe('A');
    });
  });

  describe('should work with multiple nodes', () => {
    const a = new Node('A');
    const b = new Node('B');
    const c = new Node('C');
    const d = new Node('D');
    const e = new Node('E');

    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;

    it('should return undefined when k === 0', () => {
      expect(kthToLastNode(0, a)).toBeUndefined();
    });

    it('should return undefined when k is greater than the length of the list', () => {
      expect(kthToLastNode(8, a)).toBeUndefined();
    });

    it('should return the head node if k is equal to the length of the list', () => {
      expect(kthToLastNode(5, a)).toBe('A');
    });

    it('should successfully retrieve the 2nd to last node', () => {
      expect(kthToLastNode(2, a)).toBe('D');
    });

    it('should successfully retrieve the 4th to last node', () => {
      expect(kthToLastNode(4, a)).toBe('B');
    });

    it('should successfully retrieve the last node', () => {
      expect(kthToLastNode(1, a)).toBe('E');
    });
  });
});
