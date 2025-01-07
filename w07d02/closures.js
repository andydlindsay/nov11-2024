// class Counter {
//   constructor() {
//     this.count = 0;
//   }

//   increment() {
//     this.count++;
//     console.log(this.count);
//   }
// }

// const counter = new Counter();
// // console.log(counter);

// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();

// closure => a function will remember variables that were in scope when declared

let count = 0; // 2
let username = 'alice';

const increment = () => {
  count++;
  console.log(count);
};

increment();
increment();
increment();
increment();
increment();
