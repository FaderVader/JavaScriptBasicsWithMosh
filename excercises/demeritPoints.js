function checkSpeed(speed) {   
    const speedLimit = 70
    const kmPrPoint = 5;
    let excessSpeed = speed - speedLimit;
    let result;

    if (excessSpeed < kmPrPoint) {
        result = 'OK';
    } else {
        const points = Math.floor(excessSpeed / 5);
        result = (points >= 12) ? 'License suspended' : 'You get ' + points + ' point(s)';
    };

    console.log(result);
};

checkSpeed(77);