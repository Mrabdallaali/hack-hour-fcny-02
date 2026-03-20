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

  push(val: T): void {}

  pop(): T | undefined {
    return undefined;
  }
}

class Queue<T> {
  inStack: Stack<T>;
  outStack: Stack<T>;

  constructor() {
    this.inStack = new Stack();
    this.outStack = new Stack();
  }

  enqueue(val: T): void {}

  dequeue(): T | undefined {
    return undefined;
  }
}

export { Stack, Queue };
