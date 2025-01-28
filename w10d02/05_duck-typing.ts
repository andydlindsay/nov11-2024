interface PotentialUser {
  username: string;
  password: string;
}

const login = (user: PotentialUser): boolean => {
  user.username;
  return true;
};

const myUser = {
  username: 'jstamos',
  password: '1234',
  extraKey: 42
};

login(myUser);
