import { describe, it, expect } from 'vitest';
import {
  nestedArrMax,
  nestedArrMaxLevel,
  NestedNumberArray,
} from '../challenges/nested-array-max';

describe('nestedArrMax test', () => {
  type NestedNumberArray = [
    number | NestedNumberArray,
    ...(number | NestedNumberArray)[]
  ];
  const flatArr: NestedNumberArray = [1, 2, 5, 10, 3];
  const nestedMaxArr: NestedNumberArray = [1, [2, 5, [10]]];
  const unnestedMaxArr: NestedNumberArray = [1, [2, 5, [3], 10]];

  it('should find the max in a flat array', () => {
    expect(nestedArrMax(flatArr)).toBe(10);
  });

  it('should find the max in a nested array', () => {
    expect(nestedArrMax(nestedMaxArr)).toBe(10);
  });

  it('should find the max when it is not in the deepest nested array', () => {
    expect(nestedArrMax(unnestedMaxArr)).toBe(10);
  });
});

describe.skip('nestedArrMaxLevel test', () => {
  const flatArr: NestedNumberArray = [1, 2, 5, 10, 3];
  const nestedMaxArr: NestedNumberArray = [1, [2, 5, [10]]];

  it('should find the max in a flat array', () => {
    expect(nestedArrMaxLevel(flatArr, 2)).toBe(10);
  });

  it('should find the max in a nested array at the deepest level', () => {
    expect(nestedArrMaxLevel(nestedMaxArr, 3)).toBe(10);
  });

  it('should not find a max past the specified level', () => {
    expect(nestedArrMaxLevel(nestedMaxArr, 2)).toBe(5);
  });
});
