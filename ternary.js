let points = 90;
let type = points > 100 ? 'Gold' : 'silver'
console.log(type);

points > 100 ? console.log('1') : console.log('2');

let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);