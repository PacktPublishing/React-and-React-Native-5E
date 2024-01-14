import { useQuery } from "@tanstack/react-query";
import UserInfo from "./UserInfo";

const userFetcher = () =>
  fetch("https://api.github.com/users/sakhnyuk").then((response) =>
    response.json()
  );

function App() {
  const {
    data: user,
    isPending,
    isError,
  } = useQuery({ queryKey: ["githubUser"], queryFn: userFetcher });

  return (
    <div>
      {isPending && <p>Loading...</p>}
      {isError && <p>Error fetching data</p>}
      {user && <UserInfo user={user} />}
    </div>
  );
}

export default App;
