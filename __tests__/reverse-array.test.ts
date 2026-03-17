import { describe, it, expect } from 'vitest';
import { reverseArray, reverseSentence } from '../challenges/reverse-array';

describe('reverseArray', () => {
  let arr: number[], reversed: number[];

  it('reverses an empty array', () => {
    arr = [];
    expect(reverseArray(arr)).toEqual([]);
  });

  it('returns the same array in memory', () => {
    arr = [];
    expect(reverseArray(arr)).toBe(arr);
    arr = [1, 2, 4];
    expect(reverseArray(arr)).toBe(arr);
  });

  it('reverses the elements of an array with an even number of elements', () => {
    arr = [1, 2];
    reversed = [2, 1];
    expect(reverseArray(arr.slice())).toEqual(reversed);

    arr = [1, 2, 4, 5];
    reversed = [5, 4, 2, 1];
    expect(reverseArray(arr.slice())).toEqual(reversed);
  });

  it('reverses the elements of an array with an odd number of elements', () => {
    arr = [6];
    reversed = [6];
    expect(reverseArray(arr.slice())).toEqual(reversed);

    arr = [1, 2, 4];
    reversed = [4, 2, 1];
    expect(reverseArray(arr.slice())).toEqual(reversed);

    arr = [1, 2, 4, 5, 7];
    reversed = [7, 5, 4, 2, 1];
    expect(reverseArray(arr.slice())).toEqual(reversed);
  });
});

describe.skip('reverseSentence', () => {
  let sentence: string, reversed: string;
  it('returns a single word unchanged', () => {
    sentence = 'hello';
    reversed = 'hello';
    expect(reverseSentence(sentence)).toBe(reversed);
  });

  it('reverses a sentence', () => {
    sentence = 'teriyaki chicken';
    reversed = 'chicken teriyaki';
    expect(reverseSentence(sentence)).toBe(reversed);

    sentence = 'ill be back';
    reversed = 'back be ill';
    expect(reverseSentence(sentence)).toBe(reversed);

    sentence = 'to be or not to be';
    reversed = 'be to not or be to';
    expect(reverseSentence(sentence)).toBe(reversed);
  });
});
