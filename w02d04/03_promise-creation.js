// native
// ES6 2015

const promise = new Promise((resolve, reject) => {
  // long running operation

  // happy path, we call resolve
  resolve(true); // resolve is tied to the .then

  // unhappy path, we call reject
  reject('bad stuff happened'); // reject is tied to the .catch
});

promise
  .then((data) => {
    console.log('resolved value is', data);
  })
  .catch((err) => {
    console.log('rejected error message is', err);
  });

console.log('bottom of file');
