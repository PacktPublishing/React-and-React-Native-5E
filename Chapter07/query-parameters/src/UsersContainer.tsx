import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Users from "./Users";
import { SortOrder, fetchUsers } from "./api";

function UsersContainer() {
  const [users, setUsers] = useState<string[]>([]);
  const [search] = useSearchParams();

  useEffect(() => {
    const order = search.get("order") as SortOrder;

    fetchUsers(order).then((users) => {
      setUsers(users);
    });
  }, [search]);

  return <Users users={users} />;
}

export default UsersContainer;
