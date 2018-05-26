function showProperties(obj) {
    for (let key in obj) {
        let typeOfElement = typeof(obj[key]);
        if (typeof obj[key] === 'string') {
            console.log(key +': ' + obj[key]);
        }
    }
}

const picture = {
    title: "A sunset",
    artist: "Picassi",
    medium: "Oil on canvas",
    price: 113.01
}

showProperties(picture);