function getAverage(numbers) {  
    let sum = 0;

    for (let number of numbers) 
        sum += number;
    return sum / numbers.length;
}

function calculateGrade(marks) {
    const average = getAverage(marks);

    switch (true) {
        case (average > 90):
        return "A";

        case (average > 80):
        return "B";

        case (average > 70):
        return "C";

        case (average > 60):
        return "D";

        case (average > 1):
        return "F";
    }
};



const marks = [40, 32, 70, 99, 80, 100];

console.log(calculateGrade(marks));