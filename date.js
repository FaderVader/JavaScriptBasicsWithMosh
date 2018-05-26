const now = new Date;
const date1 = new Date('May 11 2018 08:00');
const date2 = new Date(2018, 5, 11, 9);
console.log(date1); // 2018-05-11T06:00:00.000Z
console.log(date2); // 2018-06-11T07:00:00.000Z
console.log(now.getMonth()); // 4 (month is 0-based)

console.log(now.toDateString()); // Sun May 20 2018
console.log(now.toTimeString()); // 21:34:32 GMT+0200 (Romance Daylight Time)¨
console.log(now.toISOString()); // 2018-05-20T19:35:11.111Z