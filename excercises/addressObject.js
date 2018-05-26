function showAddress(address) {
    for (let key in address) {
        console.log(`${key}: ${address[key]}`);
    }
}

let myAddress = {
    street: 'Stringbergsvej 88',
    city: 'Valby',
    zip: 2500
}

showAddress(myAddress);