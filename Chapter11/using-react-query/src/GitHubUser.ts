export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  gists_url: string;
  repos_url: string;
  name: string;
  company: string | null;
  location: string | null;
  bio: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
}
