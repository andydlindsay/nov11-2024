let i = 11;

const interval = setInterval(() => {
  i--;
  console.log('hello', i);

  if (i === 0) {
    clearInterval(interval);
  }
}, 1000);
