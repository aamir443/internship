// Q3) let string = 'INDIA'
// output = 'INDONESIA'
// Use array.splice
let string = 'INDIA';

let charArray = string.split('');


charArray.splice(3, 0, 'O', 'N', 'E', 'S');
charArray.splice(7, 0, 'I');

let result = charArray.join('');

console.log(result); 
