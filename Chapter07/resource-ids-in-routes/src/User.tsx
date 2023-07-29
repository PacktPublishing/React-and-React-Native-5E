import { User } from "./api";

type UserDataProps = {
  user: User;
};

function UserData({ user }: UserDataProps) {
  return (
    <section>
      <p>{user.first}</p>
      <p>{user.last}</p>
      <p>{user.age}</p>
    </section>
  );
}

export default UserData;
