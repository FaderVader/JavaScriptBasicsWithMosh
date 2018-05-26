let name = 'Jakob';
console.log(name);

const pi = 3.1415

let shipped = true; 
let arrived = false;
let myName = undefined; //null

// cannot use template literals when variable is undefined/null
// console.log(`var nyName is: ${nyName}, is of type ${typeof(myName)}`);
console.log(myName); // logs undefined

console.log(`var shipped:${shipped}, is of type: ${typeof(shipped)}`);
shipped = Date.now();
console.log(`var shipped:${shipped}, is now of type: ${typeof(shipped)}`);

let interestRate = 3;
console.log(`var interestRate:${interestRate}, is a ${typeof(interestRate)}`);
interestRate = 3.0;
console.log(`var interestRate:${interestRate}, is a ${typeof(interestRate)}`);

