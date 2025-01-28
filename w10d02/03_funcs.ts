// parameters, return value, name

const sayHello = (name: string, age: number = 100): string => {
  return `hello there ${name}`;
};

sayHello('alice', 42);
sayHello('alice');

const returningPromise = (): Promise<string> => {
  return new Promise((resolve) => {
    resolve('hello there');
  });
};

returningPromise()
  .then((data) => {});
