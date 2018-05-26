function countTruthy(array) {
    let counter = 0;
    for (let element of array) {
        if (element) { counter++; }
    }
    return counter;
};

let input = [0, 1, 2, 3, 'true', -1];
console.log(countTruthy(input));