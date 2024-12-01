// Q10) Write a function to reverse a string.
// Input - Hello
// Outpur - olleH

function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Example usage
  const input = "Hello";
  const output = reverseString(input);
  
  console.log(output); // Output: olleH
  