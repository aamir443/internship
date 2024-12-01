// Take any string with minimum 20 characters. Count number of consonant and vowel in the string.
let str = "JavaScript is a powerful language for web development";

let lowerStr = str.toLowerCase();

let vowels = 'aeiou';

let vowelCount = 0;
let consonantCount = 0;

for (let char of lowerStr) {
  if (vowels.includes(char)) {
    vowelCount++; 
  } else if (char >= 'a' && char <= 'z') {
    consonantCount++; 
  }
}

console.log(`Number of vowels: ${vowelCount}`);
console.log(`Number of consonants: ${consonantCount}`);
