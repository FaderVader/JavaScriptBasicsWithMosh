function Circle(radius) {   
    this.radius = radius;
    this.draw = function() {
        console.log('drawing a circle with radius ', this.radius);
    }
}

const circle1 = new Circle(1);
// circle1.draw();

const circle2 = new Circle(3);


const myCircle = Object.assign({}, circle1);

console.log(myVariable);