import { describe, it, expect } from 'vitest';
import { Stack, Queue } from '../challenges/stack-queue';

describe('Stack', () => {
  const stack = new Stack();

  it('should have an `items` property.', () => {
    expect(stack.items).toBeDefined();
    expect(stack.items).toEqual({});
  });

  it('should have a `length` property.', () => {
    expect(stack.length).toBeDefined();
    expect(stack.length).toBe(0);
  });

  describe('.push()', () => {
    it('should have a push method', () => {
      expect(stack.push).toBeDefined();
      expect(typeof stack.push).toBe('function');
    });

    it('should add value to stack', () => {
      stack.push(1);
      expect(stack.items[0]).toBe(1);
    });

    it('should add new values to top (end) of stack', () => {
      stack.push(2);
      stack.push(3);
      expect(stack.items[1]).toBe(2);
      expect(stack.items[2]).toBe(3);
    });

    it('should increment length', () => {
      expect(stack.length).toBe(3);
    });
  });

  describe('.pop()', () => {
    it('should have a pop method', () => {
      expect(stack.pop).toBeDefined();
      expect(typeof stack.pop).toBe('function');
    });

    it('should remove the value from top (end) of stack', () => {
      stack.pop();
      expect(stack.items[2]).toBeUndefined();
    });

    it('should decrement length', () => {
      expect(stack.length).toBe(2);
    });

    it('should return the popped value', () => {
      expect(stack.pop()).toBe(2);
    });

    it('should return undefined if the stack is empty', () => {
      stack.pop();
      expect(stack.pop()).toBeUndefined();
    });

    it('shouldnt continue decrementing length on subsequent pops', () => {
      stack.pop();
      stack.pop();
      expect(stack.length).toBe(0);
    });
  });
});

describe('Queue', () => {
  const queue = new Queue();

  it('should consist of two Stacks', () => {
    expect(queue.inStack).toBeDefined();
    expect(queue.inStack).toBeInstanceOf(Stack);
    expect(queue.outStack).toBeDefined();
    expect(queue.outStack).toBeInstanceOf(Stack);
  });

  it('should have an enqueue method', () => {
    expect(queue.enqueue).toBeDefined();
    expect(typeof queue.enqueue).toBe('function');
  });

  it('should have a dequeue method', () => {
    expect(queue.dequeue).toBeDefined();
    expect(typeof queue.dequeue).toBe('function');
  });

  it('should return undefined if nothing to dequeue', () => {
    expect(queue.dequeue()).toBeUndefined();
  });

  it('should add and remove values from queue based on first in, first out rule', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
  });
});
