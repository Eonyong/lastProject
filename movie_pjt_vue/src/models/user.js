export default class User {
  constructor(username, email, password, passwordConfirm, id) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.passwordConfirm = passwordConfirm;
    this.id = id
  }
}