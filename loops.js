// const person = {
//     name: 'Jakob',
//     age: 47,
//     sex: 'male'
// };

// for (let key in person) {
//     console.log(`The persons ${key} is ${person[key]}`);
// };

// const colors = ['red', 'green', 'blue'];
// for (let color of colors) {
//     console.log(color);
// };

// for (let index in colors) {
//     console.log(index, colors[index]);
// };


let i = 0;
while (i <= 10) {
    if (i % 2 === 0) {
        i++;
        continue;
    }
    console.log(++i);
}


// for (let i = 0; i < 6; i++) {
//     console.log('Variable is: ' + i);
// }

// let i = 0;
// while (i < 6) {
//     console.log(i++)
// };

// let j = 0;
// do {
//     console.log(j++);
// } while (j < 6);
