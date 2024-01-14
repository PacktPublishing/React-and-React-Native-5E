import axios, { AxiosInstance } from "axios";
import { GitHubUser } from "./GitHubUser";

class API {
  private apiInstance: AxiosInstance;

  constructor() {
    this.apiInstance = axios.create({
      baseURL: "https://api.github.com",
    });

    this.apiInstance.interceptors.request.use((config) => {
      console.log("Request:", `${config.method?.toUpperCase()} ${config.url}`);
      return config;
    });

    this.apiInstance.interceptors.response.use(
      (response) => {
        console.log("Response:", response.data);
        return response;
      },
      (error) => {
        console.log("Error:", error);
        return Promise.reject(error);
      }
    );
  }

  getProfile(username: string) {
    return this.apiInstance.get<GitHubUser>(`/users/${username}`);
  }
}

export default new API();
