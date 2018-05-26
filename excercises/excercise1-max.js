function getMax(argA, argB) {    
    if (!(typeof(argA) === 'number' && typeof(argB) === 'number')) {
        return null;        
    };
    return (argA > argB) ? argA : argB;
}
let a = 'alpha';
let b = 10;

console.log(getMax(a,b));