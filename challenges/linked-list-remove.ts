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
 
 // set up two pointers
  // previousNode starts unset because nothing comes before the head
  // currentNode starts at the head (the beginning of the list)
  let previousNode: ListNode<T>;
  let currentNode = ll.head;

  // keep looping as long as currentNode is not null
  // when we fall off the end of the list, currentNode becomes null and we stop
  while (currentNode) {

    // check if the current node holds the value we're looking for
    if (currentNode.val === val) {

      // we found our target — now we need to remove it
      // first ask: is the node we're removing the head of the list?
      currentNode === ll.head

        // YES — just move the head pointer forward to the next node
        // the old head is now disconnected from the list
        ? (ll.head = currentNode.next)

        // NO — stitch previousNode.next around the removed node
        // so the node before it now points to the node after it
        // the ! tells TypeScript "trust me, previousNode is set here"
        : (previousNode!.next = currentNode.next);

      // return the removed node immediately and exit the function
      // currentNode still exists, it's just no longer part of the list
      return currentNode;
    }

    // no match yet — advance both pointers forward by one node
    previousNode = currentNode;       // prev catches up to curr
    currentNode = currentNode.next;   // curr moves to the next node
  }

  // we made it through the whole list without finding the value
  // return undefined to signal it wasn't there
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
