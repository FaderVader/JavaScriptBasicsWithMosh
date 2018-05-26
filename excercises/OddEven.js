function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        const oddOrEven = (i % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(i, oddOrEven);
    }
};

showNumbers(11);