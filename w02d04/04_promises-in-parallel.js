// promise one   1000ms
// promise two   2000ms
// promise three 3000ms
// in series, in sequence 6000ms
// in parallel 3000ms

const promiseGenerator = require('./generators/generate-promise');

const promiseOne = promiseGenerator('promise one', false, 1000);
const promiseTwo = promiseGenerator('promise two', false, 2000);
const promiseThree = promiseGenerator('promise three', false, 3000);

const promises = [promiseTwo, promiseThree, promiseOne];

// [ 'promise one', 'promise two', 'promise three' ]

Promise.all(promises)
  .then((allResolvedValues) => {
    console.log(allResolvedValues);

    const resolvedValueOne = allResolvedValues[0];
  });

Promise.race(promises)
  .then((resolvedValue) => {
    console.log('this was the fastest promise', resolvedValue);
  });
