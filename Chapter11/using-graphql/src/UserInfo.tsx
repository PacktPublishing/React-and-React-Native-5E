import React from "react";
import { GitHubUser } from "./GitHubUser";

interface GitHubUserProps {
  user: GitHubUser;
}

const UserInfo: React.FC<GitHubUserProps> = ({ user }) => {
  return (
    <div>
      <img src={user.avatarUrl} alt={user.login} width="100" height="100" />
      <h2>{user.name || user.login}</h2>
      <p>{user.bio}</p>
      <p>Location: {user.location || "Not specified"}</p>
      <p>Company: {user.company || "Not specified"}</p>
    </div>
  );
};

export default UserInfo;
