function fizzBuzz(input) {
    if (!(typeof (input) === 'number')) {
        return NaN;
    };

    let result = "";
    let divided = false;

    if (input % 3 === 0) {
        result = 'Fizz';
        divided = true;
    }

    if (input % 5 === 0) {
        result += 'Buzz';
        divided = true;
    }

    return (divided) ? result : input
}

const output = fizzBuzz('alpha');
console.log(output);