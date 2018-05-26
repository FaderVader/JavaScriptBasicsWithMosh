// string primitive
const message = 'hi';

// String object
const message2 = new String('Hello');

console.log(typeof message);  // string
console.log(typeof message2); // object

console.log(message.length); // 2
console.log(message2.indexOf('o')); // 4
console.log(message.includes('i')); // true
console.log(message.startsWith('h')); // true
