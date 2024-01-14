import { useEffect, useState } from "react";
import { GitHubUser } from "./GitHubUser";
import UserInfo from "./UserInfo";
import api from "./api";

function App() {
  const [user, setUser] = useState<GitHubUser>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    api
      .getProfile("sakhnyuk")
      .then((res) => setUser(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && !user && <p>No user found.</p>}
      {user && <UserInfo user={user} />}
    </div>
  );
}

export default App;
