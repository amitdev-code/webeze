import { AxiosResponse } from "axios";
import apiClient from "../AxiosClient";

export const AuthenticationApi = {
  login: async (email: string, password: string): Promise<AxiosResponse> => {
    return apiClient.post("auth/login", { email, password });
  },
};
