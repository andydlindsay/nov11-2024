export interface Dog {
  breed: string;
  age: number;
}

export interface User {
  id?: number;
  username: string;
  password: string;
  pet: Dog;
}

const user: User = {
  // id: 7,
  username: 'alice',
  password: '1234',
  pet: {
    breed: 'labrador',
    age: 7
  }
};

const users: User[] = [];

users.push(user);
