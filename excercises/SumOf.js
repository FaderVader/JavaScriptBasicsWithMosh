function sum(limit) {
    const startTime = Date.now();
    let endTime;    
    let sum = 0;

    // method 1 - break early
    console.log('method 1:')
    for (let i=0; i <= limit; i++) {
        if (i*3 > limit) { break;} else { sum += i*3 }
    }
    for (let i=0; i <= limit; i++) {        
        if (i*5 > limit) { break;} else { sum += i*5 }
    }
    endTime = Date.now();
    console.log('Time to get result1: ' + (endTime - startTime));
    console.log(sum);

    // method 2 - continue to bitter end
    console.log('method 2:')
    sum = 0;
    for (let i=0; i <= limit; i++) {
        if (i*3 < limit) { sum += i*3 }
    }
    for (let i=0; i <= limit; i++) {        
        if (i*5 < limit) { sum += i*5 }
    }

    endTime = Date.now();
    console.log('Time to get result2: ' + (endTime - startTime));
    console.log(sum);
};

sum(10000);