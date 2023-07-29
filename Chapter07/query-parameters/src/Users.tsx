type UsersProps = {
  users: string[];
};

function Users({ users }: UsersProps) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user}>{user}</li>
      ))}
    </ul>
  );
}

export default Users;
