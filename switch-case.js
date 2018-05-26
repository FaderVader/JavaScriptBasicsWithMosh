let userType = 'user'
let access;

switch (userType) {
    case 'guest':
        access = 'none'
        break;

    case 'user':
        access = 'read';
        break;

    case 'admin':
        access = 'write'
        break;

    default:
        access = 'null'
}

console.log(access);