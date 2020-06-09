class Animal {
    Animal(name){
        this.name = name;
    }
}
class Bird extends Animal{
    fly() {
        console.log('Flying...');
    }
}
const bird1 = new Bird('join');
console.log(bird1.fly());