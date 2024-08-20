// authService.js
import axios from "axios";

const baseAuthUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "v1/api/auth";

const authService = {
  async login(email, password) {
    try {
      const response = await axios.post(baseAuthUrl + "/public/authenticate", {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error("Login failed. Please check your credentials.");
      }
    } catch (error) {
      throw error;
    }
  },
};

export default authService;
