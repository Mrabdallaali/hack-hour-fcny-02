/*

Write a function to delete the first node with a given value in a singly linked list.
The function should return the deleted node, or undefined if the value was not found.

Example: 
Given a linked list: ('a' -> 'b' -> 'c' -> 'b' -> 'd')
and a value: 'b'
After calling linkedListRemove, the linked list should look like:
  ('a' -> 'c' -> 'b' -> 'd')
and the function should return the removed node with the value of 'b'.

How might you remove a linked list value without adding extra properties to the constructor functions?

*/

class LinkedList<T> {
  head: null | ListNode<T>;

  constructor() {
    this.head = null;
  }
}

class ListNode<T> {
  val: T;
  next: null | ListNode<T>;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

const linkedListRemove = <T>(
  ll: LinkedList<T>,
  val: T
): ListNode<T> | undefined => {
  return undefined;
};

/*
Extension #1: 
Refactor the function above to achieve the same result with linear time complexity (O(n)) AND constant space complexity (O(1)). 
*/

/*

Extension #2: 
Write a function to delete ALL nodes with a given value in a singly linked list. Afterwards, return the linked list.

Example: 
Given a linked list: ('a' -> 'b' -> 'd' -> 'c' -> 'd')
and a value: 'd'
Calling linkedListRemove should return the linked list: ('a' -> 'b' -> 'c')

*/

const linkedListRemoveMultiple = <T>(
  ll: LinkedList<T>,
  val: T
): LinkedList<T> => {
  return ll;
};

export { LinkedList, ListNode, linkedListRemove, linkedListRemoveMultiple };
