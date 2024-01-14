import React from "react";
import { GitHubUser } from "./GitHubUser";

interface GitHubUserProps {
  user: GitHubUser;
}

const UserInfo: React.FC<GitHubUserProps> = ({ user }) => {
  return (
    <div>
      <img src={user.avatar_url} alt={user.login} width="100" height="100" />
      <h2>{user.name || user.login}</h2>
      <p>{user.bio}</p>
      <p>Location: {user.location || "Not specified"}</p>
      <p>Company: {user.company || "Not specified"}</p>
      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
      <p>Public Repos: {user.public_repos}</p>
      <p>Public Gists: {user.public_gists}</p>
      <p>
        GitHub Profile:{" "}
        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
          {user.login}
        </a>
      </p>
    </div>
  );
};

export default UserInfo;
