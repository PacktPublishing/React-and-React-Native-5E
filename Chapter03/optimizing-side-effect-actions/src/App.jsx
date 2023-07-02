import * as React from "react";

function App() {
  const [id, setId] = React.useState("loading...");
  const [name, setName] = React.useState("loading...");

  const fetchUser = React.useCallback(() => {
    console.count("fetching user");
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: 1, name: "Mike" });
      }, 1000);
    });
  }, []);

  React.useEffect(() => {
    fetchUser().then((user) => {
      setId(user.id);
      setName(user.name);
    });
  }, []);

  return (
    <>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
    </>
  );
}

export default App;
