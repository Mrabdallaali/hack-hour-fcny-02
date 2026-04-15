/*
 * Write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   Make your solution work for all types of brackets
 *
 * Example:
 *   balancedParens('[](){}'); // true
 *   balancedParens('[({})]');   // true
 *   balancedParens('[(]{)}'); // false
 *
 * Step 3:
 *   Ignore non-bracket characters
 *   balancedParens(' const wow = { yo: thisIsAwesome() }'); // true
 *   balancedParens(' const newton = () => { telescopes.areSicc(); '); // false
 *
 *
 */

const balancedParens = (input: string): boolean => {
  const matchingBrackets:  Record<string, string>= {
    '[': ']',
    '{': '}',
    '(': ')',
  };

  const stack: string[] = [];

  for (const char of input) {
    if (char in matchingBrackets){
      stack.push(matchingBrackets[char]);
    } else if (')]}'.includes(char)) {
      if (stack.pop() !== char) return false;
    }
  }
  
  return stack.length === 0;
};

export default balancedParens;
