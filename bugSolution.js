function foo(a, b) {
  if (a === null || b === null || typeof a !== 'number' || typeof b !== 'number') {
    return null; // or throw an error: throw new Error('Invalid input types');
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: null
console.log(foo(1, null)); // Output: null
console.log(foo(null, null)); // Output: null
console.log(foo(1, "2")); // Output: null
console.log(foo("1", 2)); // Output: null