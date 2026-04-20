/*
 
  First, create a Stack which contains the following methods:
  - push: add value to top (end) of stack
  - pop: remove and return value from top (end) of stack
 
  Second, create a Queue which consists of two stacks
  and contains the following methods:
  - enqueue: add value to queue
  - dequeue: remove value from queue
  Queue methods should follow First In, First Out (FIFO) rule, and
  should be accomplished only by pushing and popping to/from the
  two stacks - no additional data structures are necessary.
 
  DO NOT USE NATIVE JS METHODS
 
 */

class Stack<T> {
  items: { [key: number]: T };
  length: number;

  constructor() {
    this.items = {};
    this.length = 0;
  }

    // O(1) - just store at current index and increment
  push(val: T): void {
    this.items[this.length++] = val;
  }

    // O(1) - just grab from top, delete, and decrement
  pop(): T | undefined {
    if (this.length <= 0) return undefined;
    const val = this.items[this.length - 1];
    delete this.items[this.length - 1];
    this.length--;
    return val;
  }
}

class Queue<T> {
  inStack: Stack<T>;
  outStack: Stack<T>;

  constructor() {
    this.inStack = new Stack();
    this.outStack = new Stack();
  }

   // O(1) - just push onto inStack
  enqueue(val: T): void {
    this.inStack.push(val);
  }

   // O(n) worst case, O(1) amortized
  dequeue(): T | undefined {
     // if both stacks empty, nothing to dequeue
    if (!this.inStack.length && !this.outStack.length) return;
    
    // only pour when outStack is empty
    // this flips the order, putting the oldest item on top
     if (!this.outStack.length) {
      while (this.inStack.length) {
        this.outStack.push(this.inStack.pop()!);
      }
    }

    // always pop from outStack
    return this.outStack.pop();
  }
}

 
/*  The three things to remember if you had to recall this from scratch:

1- Stack uses a plain object {} with a manual length counter instead of an array
2- enqueue always goes to inStack, dequeue always comes from outStack
3- Only pour inStack into outStack when outStack is empty — otherwise just pop directly

 */
export { Stack, Queue };
