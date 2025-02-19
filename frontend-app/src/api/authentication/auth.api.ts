import { AxiosResponse } from "axios";
import apiClient from "../AxiosClient";

export const AuthenticationApi = {
  login: async (email: string, password: string): Promise<AxiosResponse> => {
    return apiClient.post("auth/login", { email, password });
  },
  register: async (email: string, password: string, company_name: string): Promise<AxiosResponse> => {
    return apiClient.post("auth/register", { email, password, company_name });
  }
};
