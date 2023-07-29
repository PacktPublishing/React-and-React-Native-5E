export type User = {
  first: string;
  last: string;
  age: number;
};

const users: User[] = [
  { first: "John", last: "Snow", age: 40 },
  { first: "Peter", last: "Parker", age: 30 },
];

export function fetchUsers(): Promise<User[]> {
  return new Promise((resolve) => {
    resolve(users);
  });
}

export function fetchUser(id: number): Promise<User> {
  return new Promise((resolve, reject) => {
    const user = users[id];

    if (user === undefined) {
      reject(`User ${id} not found`);
    } else {
      resolve(user);
    }
  });
}
