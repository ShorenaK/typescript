"use strict";
// let greet: Function; 
let greet;
greet = () => {
    console.log('hello, again');
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 6, 30);
const minus = (a, b) => {
    return a = b;
};
const logDetails = (user) => {
    console.log(`${user.name} say hello`);
};
const object = (user) => {
    console.log(user.name, user.age);
};
const greet2 = (uid, item) => {
    console.log(`${item} has a ${uid}`);
};
const greetAgain = (uid, item) => {
    console.log(`${item} has a ${uid}`);
};
greet2('d', 's');
let greet1;
greet1: (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
let logDetails2;

logDetails2 = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age}`);
};
