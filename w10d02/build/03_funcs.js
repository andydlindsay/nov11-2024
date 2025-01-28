"use strict";
// parameters, return value, name
const sayHello = (name, age = 100) => {
    return `hello there ${name}`;
};
sayHello('alice', 42);
sayHello('alice');
const returningPromise = () => {
    return new Promise((resolve) => {
        resolve('hello there');
    });
};
returningPromise()
    .then((data) => { });
