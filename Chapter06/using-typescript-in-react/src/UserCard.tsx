type UserProps = {
  user: {
    name: string;
    email: string;
  };
};

const UserCard = ({ user }: UserProps) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

export default UserCard;
