/**
 * Write a function that takes two parameters: an integer (k), and the head of a singly linked list.
 * This function should return the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * Example:
 * kthToLastNode(2, a); // -> should return 'D' (the value on the second to last node)
 *
 * Additional info:
 * - Invalid inputs should return undefined
 * - When k is 1, the function should return the tail node.
 * - When k is the length/size of the linked list, the function should return the head node.
 */

class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(val: T) {
    this.value = val;
    this.next = null;
  }
}

const kthToLastNode = <T>(k: number, head: Node<T>): T | undefined => {
  return undefined;
};

// Don't delete the line below!
export { Node, kthToLastNode };
