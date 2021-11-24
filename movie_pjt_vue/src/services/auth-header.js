export default function authHeader() {
  let user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token) {
    return { Authorization: "JWT " + user.token };
  } else {
    return {};
  }
}