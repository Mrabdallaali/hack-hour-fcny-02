/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 * If the input is null, your function should return null
 *
 * Example:
 * If the linked list is:
 *
 *      1 -> 2 -> 3 -> 4 -> 5
 *
 * The reversed linked list should look like:
 *
 *      5 -> 4 -> 3 -> 2 -> 1
 *
 * and the function should return a node with the value of 5
 *
 * Extension:
 * Do it in place
 *
 */

class ListNode<T> {
  value: T;
  next: ListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

const reverseLinkedList = <T>(head: ListNode<T> | null): ListNode<T> | null => {
  return null;
};

export { ListNode, reverseLinkedList };
