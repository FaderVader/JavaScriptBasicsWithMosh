let nicePerson = {
    name: 'Jakob',
    age: 47
};

console.log(nicePerson.name);
console.log(nicePerson);

nicePerson.name = 'Thomas';

let age = nicePerson['age']; //bracket notatation
console.log(age);

let varName = 'name'
let relevantAttrib = nicePerson[varName];
console.log(relevantAttrib);