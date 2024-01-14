export interface GitHubUser {
  login: string;
  id: number;
  avatarUrl: string;
  name: string;
  company: string | null;
  location: string | null;
  bio: string | null;
}
