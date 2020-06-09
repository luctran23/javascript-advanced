let a  = 10;
let b = a;
a = 20;

let obj1 = { value: 10 };
let obj2 = obj1;
obj1.value = 20;

console.log(a);
console.log(b);
console.log('object 1: ', obj1);
console.log('object 2: ', obj2);