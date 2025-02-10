import apiClient from "../axiosClient";
import { AxiosResponse } from "axios";

export const AuthenticationApi = {
  login: async (email: string, password: string): Promise<AxiosResponse> => {
    return apiClient.post("auth/login", { email, password });
  },
};
