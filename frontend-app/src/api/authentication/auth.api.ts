import apiClient from "../axiosClient";

export const AuthenticationApi = {
  login: async (email: string, password: string) => {
        apiClient.post("auth/login", { email, password });
  },
};
