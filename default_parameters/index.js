function sum() {
    const numbers = Array.from(arguments);
    return numbers.reduce((sum, num) => sum + num ,0);
}
var s = sum (1, 2, 3, 4);


function greeting(name = 'Girl') {
    return `Can we hang out sometimes ${name} ?`;
}
console.log(greeting());