import Image from "next/image";

export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  company: string | null;
  location: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
}

export const dynamic = "force-dynamic";

export default async function About() {
  const res = await fetch("https://api.github.com/users/sakhnyuk");
  const user: GitHubUser = await res.json();

  return (
    <main>
      <Image src={user.avatar_url} alt={user.login} width="100" height="100" />
      <h2>{user.name || user.login}</h2>
      <p>{user.bio}</p>
      <p>Location: {user.location || "Not specified"}</p>
      <p>Company: {user.company || "Not specified"}</p>
      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
      <p>Public Repos: {user.public_repos}</p>
    </main>
  );
}
