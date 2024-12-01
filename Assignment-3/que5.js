// Q5) Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.

function correctFn(sentence, wrongWord, correctWord) {
    // Use the replace() method to replace the wrong word with the correct word
    // The 'g' flag ensures that all occurrences are replaced
    return sentence.replace(new RegExp(wrongWord, 'g'), correctWord);
  }
  
  // Example usage
  let sentence = "I love to eat appel. Appel is my favorite fruit.";
  let wrongWord = "appel";
  let correctWord = "apple";
  
  let correctedSentence = correctFn(sentence, wrongWord, correctWord);
  
  console.log(correctedSentence); // Output: "I love to eat apple. Apple is my favorite fruit."
  