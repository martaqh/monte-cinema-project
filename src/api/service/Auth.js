import { defaultClient } from "@/api/axiosConfig.js";
import { REGISTER, LOGIN, USER } from "@/api/apiEndpoints.js";

export const register = async (credentials) =>
  defaultClient.post(REGISTER, {
    user: {
      email: credentials.email,
      password: credentials.password,
      first_name: credentials.first_name,
      last_name: credentials.last_name,
      date_of_birth: credentials.date_of_birth
    }
  })

export const login = async (credentials) =>
  defaultClient.post(LOGIN, {
    user: {
      email: credentials.email,
      password: credentials.password,
    },
  });

export const getUser = async () => defaultClient.get(USER);

