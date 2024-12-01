// Q9) Write a function to count the number of words in a paragraph.

function countWords(paragraph) {
    // Split the paragraph into words using spaces and filter out empty strings
    const words = paragraph.trim().split(/\s+/);  // Regex \s+ matches one or more spaces
    return words.length;
  }
  
  // Example usage
  const paragraph = "JavaScript is a powerful and flexible programming language used for web development.";
  const wordCount = countWords(paragraph);
  
  console.log(`Number of words: ${wordCount}`); // Output: Number of words: 14
  