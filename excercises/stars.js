function showStars(rows) {
    for (let i = 1; i <= rows; i++) {
        const output = '*'.repeat(i);
        console.log(output);
    }
}

showStars(60);

