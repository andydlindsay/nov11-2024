// value means anything on the right hand of an equals sign
// const name = 'alice';
// const arr = [1,2,3];
// const obj = { a: 1 };
// const myFunc = function() {};

// // method => a function inside an object
// const myObj = {
//   name: 'alice',
//   arr: [1,2,3],
//   obj: { a: 1 },
//   func: function() {
//     console.log('inside the function');
//   },
// };

// myObj.func();

// arr.forEach()

// objects are collections of data AND behaviour (function)
// OOP => Object Oriented Programming (W2D5)

let dog = {
  name: 'benji',
  species: 'dog',
  goForWalk: function(distance) {
    console.log(`I went for a ${distance}km walk!`);
  },
  sayMyname: function() {
    this.goForWalk(10);
    console.log(`My name is ${this.name}`);
  }
};

const copy = dog;
dog = null;

// dog.goForWalk(10);
copy.sayMyname();
