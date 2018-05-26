function showPrimes(limit) {
    for (let i = 2; i <= limit; i++) {
        let notPrime = false;

        for (let j = 1; j <= i; j++) {

            notPrime = IsModulusZero(i, j)
            if (notPrime) break;

        }
        if (!notPrime)
            console.log('prime found: ', i);
    }
}

function IsModulusZero(number, factor) {
    if (number % factor === 0) {        
        if (!((factor === 1) || (number === factor))) {
            return true;
        } else {
            return false;
        }
    }
}

showPrimes(20);