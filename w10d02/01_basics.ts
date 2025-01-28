let username: string | number | boolean = 'bob';

username = 'alice';
username = 42;
username = false;

// this is a comment

const nums: (string | number)[] = [];

nums.push(42);
nums.push('hello');
// nums.push(null);

const result = nums.pop();
