import { describe, it, expect } from 'vitest';
import { retrieveDepth, flattenDepth } from '../challenges/retrieve-depth';

describe('retrieveDepth', () => {
  it('handles empty arrays', () => {
    expect(retrieveDepth([], 0)).toEqual([]);
    expect(retrieveDepth([], 1)).toEqual([]);
  });

  it('retieves values less than or equal to a certain depth', () => {
    expect(retrieveDepth([2, [4, [7], 1], 5], 1)).toEqual([2, 5]);
    expect(retrieveDepth([2, [4, [7], 1], 5], 2)).toEqual([2, 4, 1, 5]);
    expect(retrieveDepth([2, [4, [7], 1], 5], 3)).toEqual([2, 4, 7, 1, 5]);
  });

  it('handles negative depth', () => {
    expect(retrieveDepth([], -1)).toEqual([]);
    expect(retrieveDepth([2, 3, [3]], -1)).toEqual([]);
  });
});

describe.skip('flattenDepth', () => {
  it('handles empty arrays', () => {
    expect(flattenDepth([], 0)).toEqual([]);
    expect(flattenDepth([], 1)).toEqual([]);
  });

  it('flattens arrays to a certain depth', () => {
    expect(flattenDepth([2, [4, [7], 1], 5], 0)).toEqual([2, [4, [7], 1], 5]);
    expect(flattenDepth([2, [4, [7], 1], 5], 1)).toEqual([2, 4, [7], 1, 5]);
    expect(flattenDepth([2, [4, [7], 1], 5], 2)).toEqual([2, 4, 7, 1, 5]);
    expect(flattenDepth([2, [4, [7], 1], 5], 3)).toEqual([2, 4, 7, 1, 5]);
  });

  it('handles negative depth', () => {
    expect(flattenDepth([], -1)).toEqual([]);
    expect(flattenDepth([2, 3, [3]], -1)).toEqual([2, 3, [3]]);
  });
});
