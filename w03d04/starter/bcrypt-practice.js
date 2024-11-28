const bcrypt = require('bcryptjs');

// const salt = bcrypt.genSaltSync();

// console.log('salt:', salt);

// const plaintextPassword = '1234';

// const hash = bcrypt.hashSync(plaintextPassword, salt);

// console.log('hash:', hash);

// const storedHash = '$2a$10$3OW4xY5qVhFM/2sr1cTUC.itYh4CDg.QxO6xX0OyXQgWC2CzKHcH6';

// const result = bcrypt.compareSync('1234', storedHash);

// console.log('result:', result);

// bcrypt.genSalt(10, (err, salt) => {
//   if (err) {
//     console.log(err);
//   }

//   console.log('salt:', salt);

//   bcrypt.hash('1234', salt, (err, hash) => {
//     console.log('hash:', hash);
//   });
// });

bcrypt.genSalt(10)
  .then((salt) => {
    console.log('salt:', salt);
    return bcrypt.hash('1234', salt);
  })
  .then((hash) => {
    console.log('hash:', hash);
  });

console.log('bottom of the file');
