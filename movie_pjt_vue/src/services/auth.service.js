import axios from "axios";

const API_URL = "http://15.164.229.252/accounts/";

class AuthService {
  login(user) {
    return axios
      .post(API_URL + "api-token-auth/", {
        username: user.username,
        password: user.password,
      })
      .then((response) => {
        console.log(response);
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(user) {
    return axios.post(API_URL + "signup/", {
      username: user.username,
      password: user.password,
      passwordConfirmation: user.passwordConfirm,
      email: user.email,
    });
  }
}

export default new AuthService();