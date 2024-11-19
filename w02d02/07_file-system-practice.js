const fs = require('fs');

// console.log(fs);

// const fileContents = fs.readFileSync('./index.html', { encoding: 'utf-8' });
// console.log('fileContents', fileContents);

// Node error-first callbacks

// callback hell/heck
fs.readFile('./index.html', { encoding: 'utf-8' }, (err, data) => {
  if (err) {
    console.log('something bad happened', err);
  }

  console.log('file contents', data.length);

  fs.writeFile('hello-world.txt', 'more and different stuff', (err, result) => {
    if (err) {
      console.log(err);
    }

    console.log('result', result);

    fs.readdir(() => {


    });
  });
});

console.log('bottom of the file');
