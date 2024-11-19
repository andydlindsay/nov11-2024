const higherOrderFunc = (callback) => {
  const data = { username: 'alice' };

  console.log('1. before the settimeout call');

  setTimeout(() => {
    console.log('3. inside the timeout');
    data.username = 'bob';
    callback(data);
  }, 3000);

  console.log('2. after the settimeout call');
};
// 5 1 2 6 3 4 
console.log('5. before the main call');

higherOrderFunc((data) => {
  console.log('data in the callback', data); // 'bob'
  console.log('4. inside the callback');
});

console.log('6. after the main call');
