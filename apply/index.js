function sum(){
    const numbers = Array.from(arguments);
    return numbers.reduce((sum, num) => sum + num, 0);
}

function average(){
    const x = sum.apply(null, arguments);
    return x/arguments.length;
}
var result = average(1, 2, 3, 6);

console.log(result);