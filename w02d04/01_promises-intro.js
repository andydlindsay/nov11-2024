const promiseGenerator = require('./generators/generate-promise');

// that returns a promise object
// fulfill successfully after 1000ms

const promise = promiseGenerator('promise one');

console.log(promise);

// .then is happy path
// .catch is for errors
// .finally runs after everything (success or failure)

promise
  .then((resolvedValue) => {
    console.log('inside the .then', resolvedValue);
  })
  .catch((err) => {
    console.log('inside the .catch', err);
  })
  .finally(() => {
    console.log('inside the .finally')
  })

// higherOrderFunc((err, data) => {
//   if (err) {
//     // handle the error
//   }
//   higherOrderFunc((err, data) => {
//     if (err) {
//       // handle the error
//     }
//   })
// })
