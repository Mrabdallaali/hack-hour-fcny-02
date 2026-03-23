/*

Given an array of at least two integers (which may be positive, negative, or zero),
return an array of all the possible products made by multiplying all but one number.
In other words, find all the products of multiplying any array.length - 1 numbers
in the array.

Example:

getAllProducts([1, 7, 3, 4]) -> [84, 12, 28, 21]
this is done via:
[7*3*4, 1*3*4, 1*7*4, 1*7*3]

getAllProducts([2, 5, 3]) -> [15, 6, 10]
this is done via:
[5*3, 2*3, 2*5]

This problem is solvable in O(n) time complexity, but be careful! 
What if there is a zero in the input array? What if there are
multiple zeroes?

*/

const getAllProducts = (array: number[]): number[] => {
  const products: number[] = [];
  
  for (let i = 0; i < array.length; i++) {
    let product = 1;
    for (let j = 0; j < array.length; j++) { 
      if (i !== j) { // we want to multiply all numbers except the one at index i (skip 'same as i')
        product *= array[j];  // multiply the current product by the number at index j, which is one of the numbers we want to include in our product
      }
    }
    products.push(product);
  }
}; 




export default getAllProducts;
