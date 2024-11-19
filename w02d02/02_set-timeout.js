// delay the execution of a function by the specified amount of ms
console.log('1. top of the file');

setTimeout(() => {
  console.log('2. hello');
}, 3000);

console.log('3. bottom of the file');

// 1,3,2
