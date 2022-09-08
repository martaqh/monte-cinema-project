import axios from "@/api/axiosConfig.js";
import { REGISTER } from "@/api/apiEndpoints.js";

export const registerNewUser = (email, password, firstName, lastName, birthDate) => {
  const params = {
    user: {
      email: email,
      password: password,
      first_name: firstName,
      last_name: lastName,
      date_of_birth: birthDate
    }
  }
  return axios.post(REGISTER, { params });
};
