// primitives are passed "by value" (the function gets a copy)
// const myNum = 42;

// const changeMyNum = function(num) {
//   num = 10;
//   console.log('inside the function', num); // 10
// };

// changeMyNum(myNum);
// console.log('outside the function', myNum); // 42 

// objects are passed "by reference" (the function gets the original)
let myObj = {
  pet: 'cat',
};

const changeMyObj = function(obj) {
  obj.pet = 'dog';
  console.log('inside the function', obj); // { pet: 'dog' }
};

myObj = true;
changeMyObj(myObj);
console.log(myObj); // 'cat' or 'dog'
