import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
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

export const getServerSideProps = (async () => {
  const res = await fetch("https://api.github.com/users/sakhnyuk");
  const user: GitHubUser = await res.json();

  return { props: { user } };
}) satisfies GetServerSideProps<{ user: GitHubUser }>;

export default function About({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
