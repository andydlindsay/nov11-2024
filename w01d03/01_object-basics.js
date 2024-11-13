const studentName = 'alice';
const cohort = 'nov 11 2024';
const hasGraduated = false;

const studentOne = [
  'alice', 
  'nov 11 2024', 
  false
];

// objects are collections of key/value pairs; dictionary, hash, hashmap, associative array

const studentOneObj = { name: "alice", cohort: "nov 11 2024", hasGraduated: false };

// const studentOneObj = {};
// studentOneObj = 'something else';

console.log(studentOneObj);

// const result = studentOneObj['cohort'];
// console.log('result', result);

// studentOneObj['newKey'] = 'hello world';
// console.log(studentOneObj);

// delete studentOneObj['cohort']
// console.log(studentOneObj);

// square bracket syntax []
// dot syntax

// const result = studentOneObj['cohort'];
const result = studentOneObj.cohort;

// const myKey = 'cohort';
// studentOneObj[myKey];
// studentOneObj.myKey;

// console.log
// console['log']

// rule of thumb: if you know the name of the key, use dot syntax

const user = {
  address: {
    street: {
      number: '1234',
      name: 'fake street',
    }
  },
};

user['address']['street']['number']
user.address.street.number

// objects represent one thing (user, database connection, product for sale)
// arrays are collections of things (users, database connections, products)
