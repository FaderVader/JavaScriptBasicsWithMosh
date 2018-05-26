// Read, Write, Execute
// 00000100 Read
// 00000010 Write
// 00000001 Execute

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission  | writePermission; // | readPermission //
console.log(myPermission); // 2

let message = (myPermission & readPermission) ? 'yes' : 'no'
console.log(message); // no
