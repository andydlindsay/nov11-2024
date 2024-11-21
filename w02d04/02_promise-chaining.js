// const mapped = arr.map()
// const filtered = mapped.filter()
// const sorted = filtered.sort()

// arr.map().filter().sort()


const promiseGenerator = require('./generators/generate-promise');

const promiseOne = promiseGenerator('promise one');
// every .then returns a new promise
// every .catch returns a new promise

promiseGenerator('promise one')
  .then((resolvedValue) => {
    console.log('inside the first .then', resolvedValue); // 'promise one'
    return promiseGenerator('promise two', true);
  })
  .then((resolvedValue) => {
    console.log('inside the second .then', resolvedValue); // 42
  })
  .then((resolvedValue) => {
    console.log('inside the third .then', resolvedValue); // undefined
  })
  .catch(() => {
    console.log('inside the .catch');
    return 'default value';
  })
