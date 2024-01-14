import UserInfo from "./UserInfo";
import { gql, useQuery } from "@apollo/client";

const GET_GITHUB_USER = gql`
  query {
    user(login: "sakhnyuk") {
      login
      id
      avatarUrl
      bio
      name
      company
      location
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(GET_GITHUB_USER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  const user = data.user;

  return (
    <div>
      <UserInfo user={user} />
    </div>
  );
}

export default App;
