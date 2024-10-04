import axios from "axios";
import { jwtDecode } from "jwt-decode";
const api = process.env.NEXT_PUBLIC_API;
export async function login(payload) {
  try {
    const response = await axios.post(`${api}/auth/login`, payload);
    return { status: true, token: response.data.token };
  } catch (error) {
    console.log(error);
    return { status: false, error };
  }
}
export const getUsername = (token) => {
  const decodedToken = jwtDecode(token);
  return decodedToken.user;
};
