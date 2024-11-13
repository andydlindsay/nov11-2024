//          Array    Object
// for..of    Y        N
// c-style    Y        N
// for..in    Y        Y

// for (const index in arr) {
//   arr[index];
// }

// for (let i = 0; i < arr.length; i++) {
//   arr[i];
// }

const obj = {
  name: 'bob',
  age: 42,
  hasLoggedIn: true,
};

for (const key in obj) {
  console.log('key', key);
  console.log('value', obj[key]);
}
