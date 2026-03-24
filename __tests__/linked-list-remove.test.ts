import { describe, it, expect, beforeEach } from 'vitest';
import {
  LinkedList,
  ListNode,
  linkedListRemove,
  linkedListRemoveMultiple,
} from '../challenges/linked-list-remove';

describe('linkedListRemove', () => {
  const ll = new LinkedList<string>;
  let node1: ListNode<string>,
    node2: ListNode<string>,
    node3: ListNode<string>,
    node4: ListNode<string>,
    node5: ListNode<string>;

  beforeEach(() => {
    node1 = new ListNode('a');
    node2 = new ListNode('d');
    node3 = new ListNode('b');
    node4 = new ListNode('c');
    node5 = new ListNode('b');
    ll.head = node1;
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;
  });

  it('Should remove the node with matching value from the middle of the linked list', () => {
    linkedListRemove(ll, 'c');
    expect(ll).toHaveProperty('head');
    if (ll.head) {
      expect(ll.head.val).toEqual('a');
      expect(ll.head).toHaveProperty('next');
      if (ll.head.next) {
        expect(ll.head.next.val).toEqual('d');
        expect(ll.head.next).toHaveProperty('next');
        if (ll.head.next.next) {
          expect(ll.head.next.next.val).toEqual('b');
          expect(ll.head.next.next).toHaveProperty('next');
          if (ll.head.next.next.next) {
            expect(ll.head.next.next.next.val).toEqual('b');
            expect(ll.head.next.next.next.next).toBeNull();
          }
        }
      }
    }
  });

  it('Should remove a matching node from the head of the list', () => {
    linkedListRemove(ll, 'a');
    expect(ll).toHaveProperty('head');
    if (ll.head) {
      expect(ll.head.val).toEqual('d');
      expect(ll.head).toHaveProperty('next');
      if (ll.head.next) {
        expect(ll.head.next.val).toEqual('b');
        expect(ll.head.next).toHaveProperty('next');
        if (ll.head.next.next) {
          expect(ll.head.next.next.val).toEqual('c');
          expect(ll.head.next.next).toHaveProperty('next');
          if (ll.head.next.next.next) {
            expect(ll.head.next.next.next.val).toEqual('b');
            expect(ll.head.next.next.next.next).toBeNull();
          }
        }
      }
    }
  });

  it('Should only remove the first matching node', () => {
    linkedListRemove(ll, 'b');
    expect(ll).toHaveProperty('head');
    if (ll.head) {
      expect(ll.head.val).toEqual('a');
      expect(ll.head).toHaveProperty('next');
      if (ll.head.next) {
        expect(ll.head.next.val).toEqual('d');
        expect(ll.head.next).toHaveProperty('next');
        if (ll.head.next.next) {
          expect(ll.head.next.next.val).toEqual('c');
          expect(ll.head.next.next).toHaveProperty('next');
          if (ll.head.next.next.next) {
            expect(ll.head.next.next.next.val).toEqual('b');
            expect(ll.head.next.next.next.next).toBeNull();
          }
        }
      }
    }
  });

  it('Should return the deleted node', () => {
    const removedNode = linkedListRemove(ll, 'd');
    expect(removedNode).not.toBeUndefined();
    if (removedNode) expect(removedNode.val).toEqual('d');
  });

  it('Should not modify the list if no node has a matching value', () => {
    linkedListRemove(ll, 'x');
    expect(ll).toHaveProperty('head');
    if (ll.head) {
      expect(ll.head.val).toEqual('a');
      expect(ll.head).toHaveProperty('next');
      if (ll.head.next) {
        expect(ll.head.next.val).toEqual('d');
        expect(ll.head.next).toHaveProperty('next');
        if (ll.head.next.next) {
          expect(ll.head.next.next.val).toEqual('b');
          expect(ll.head.next.next).toHaveProperty('next');
          if (ll.head.next.next.next) {
            expect(ll.head.next.next.next.val).toEqual('c');
            expect(ll.head.next.next.next).toHaveProperty('next');
            if (ll.head.next.next.next.next) {
              expect(ll.head.next.next.next.next.val).toEqual('b');
              expect(ll.head.next.next.next.next.next).toBeNull();
            }
          }
        }
      }
    }
  });

  it('Should return undefined if no node has a matching value', () => {
    expect(linkedListRemove(ll, 'x')).toBeUndefined();
  });

  it.skip('Bonus: Should be solved in constant space', () => {
    linkedListRemove(ll, 'd');
    expect(ll).toHaveProperty('head');
    expect(ll.head).toBe(node1);
    if (ll.head) {
      expect(ll.head.next).toBe(node3);
      if (ll.head.next) {
        expect(ll.head.next.next).toBe(node4);
        if (ll.head.next.next) {
          expect(ll.head.next.next.next).toBe(node5);
          if (ll.head.next.next.next) {
            expect(ll.head.next.next.next.next).toBeNull();
          }
        }
      }
    }
  });
});

describe.skip('linkedListRemoveMultiple', () => {
  const ll = new LinkedList<string>;
  let node1: ListNode<string>,
    node2: ListNode<string>,
    node3: ListNode<string>,
    node4: ListNode<string>,
    node5: ListNode<string>;

  beforeEach(() => {
    node1 = new ListNode('a');
    node2 = new ListNode('d');
    node3 = new ListNode('b');
    node4 = new ListNode('c');
    node5 = new ListNode('b');
    ll.head = node1;
    ll.head.next = node2;
    ll.head.next.next = node3;
    ll.head.next.next.next = node4;
    ll.head.next.next.next.next = node5;
  });

  it('Should remove all matching nodes', () => {
    linkedListRemoveMultiple(ll, 'b');
    expect(ll).toHaveProperty('head');
    if (ll.head) {
      expect(ll.head.val).toEqual('a');
      expect(ll.head).toHaveProperty('next');
      if (ll.head.next) {
        expect(ll.head.next.val).toEqual('d');
        expect(ll.head.next).toHaveProperty('next');
        if (ll.head.next.next) {
          expect(ll.head.next.next.val).toEqual('c');
          expect(ll.head.next.next.next).toBeNull();
        }
      }
    }
  });

  it('Should return the linked list', () => {
    const returnedLL = linkedListRemoveMultiple(ll, 'b');
    expect(returnedLL).toBe(ll);
  });

  it('Should return the linked list even when no nodes are removed', () => {
    const returnedLL = linkedListRemoveMultiple(ll, 'x');
    expect(returnedLL).toBe(ll);
  });

  it('Should not modify the list if no node has a matching value', () => {
    linkedListRemoveMultiple(ll, 'x');
    expect(ll).toHaveProperty('head');
    if (ll.head) {
      expect(ll.head.val).toEqual('a');
      expect(ll.head).toHaveProperty('next');
      if (ll.head.next) {
        expect(ll.head.next.val).toEqual('d');
        expect(ll.head.next).toHaveProperty('next');
        if (ll.head.next.next) {
          expect(ll.head.next.next.val).toEqual('b');
          expect(ll.head.next.next).toHaveProperty('next');
          if (ll.head.next.next.next) {
            expect(ll.head.next.next.next.val).toEqual('c');
            expect(ll.head.next.next.next).toHaveProperty('next');
            if (ll.head.next.next.next.next) {
              expect(ll.head.next.next.next.next.val).toEqual('b');
              expect(ll.head.next.next.next.next.next).toBeNull();
            }
          }
        }
      }
    }
  });

  it('Should remove the head when necessary', () => {
    linkedListRemoveMultiple(ll, 'a');
    expect(ll).toHaveProperty('head');
    if (ll.head) {
      expect(ll.head.val).toEqual('d');
      expect(ll.head).toHaveProperty('next');
      if (ll.head.next) {
        expect(ll.head.next.val).toEqual('b');
        expect(ll.head.next).toHaveProperty('next');
        if (ll.head.next.next) {
          expect(ll.head.next.next.val).toEqual('c');
          expect(ll.head.next.next).toHaveProperty('next');
          if (ll.head.next.next.next) {
            expect(ll.head.next.next.next.val).toEqual('b');
            expect(ll.head.next.next.next.next).toBeNull();
          }
        }
      }
    }
  });

  it.skip('Bonus: Should be solved in constant space', () => {
    linkedListRemoveMultiple(ll, 'b');
    expect(ll).toHaveProperty('head');
    expect(ll.head).toBe(node1);
    if (ll.head) {
      expect(ll.head.next).toBe(node2);
      if (ll.head.next) {
        expect(ll.head.next.next).toBe(node4);
      }
    }
  });
});
