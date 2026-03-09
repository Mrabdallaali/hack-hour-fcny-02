/*
 * You have an unsorted array of n + 1 integers, ranging from 1 to n,
 * with an extra number that is a duplicate. Find and return that number.
 * If no duplicates are found, return 0.
 * ex: [1,5,4,3,6,2,4,7] should return 4
 */

export const duplicateNumber = (array: number[]): number => {
  //using Set
  const seen = new Set<Number>();

  for (const num of array) {
    if (seen.has(num)) return num;
    seen.add(num);
  }
  return 0;
};

//another solution using array approach

const seen: number[] = [];

for (const num of array) {
  if (seen.includes(num)) return num;
  seen.push(num);
}
return 0;

/*
 * Extension:
 * You have an unsorted array of n + 1 positive integers, ranging from k to k +
 * (n - 1), with an extra number that is a duplicate.
 * Find and return the duplicate. Do this in O(n) time and O(1) space complexity.
 * If no duplicates are found, return 0.
 * ex: [3, 4, 7, 6, 8, 5, 6] should return 6
 */

export const duplicateNumberAdvanced = (array: number[]): number => {
  return 0;
};
