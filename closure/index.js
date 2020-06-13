function girl(name){
    return function(){
        console.log(`Hello, ${name}`);
    }
}

const log = girl('Thu');

log();