import cookie from "browser-cookies";
import jwt from "jsonwebtoken";

class Auth {
  authenticated = false;
  id = "";
  role = "";

  login(id = "", role = "", callback) {
    this.authenticated = true;
    this.id = id;
    this.role = role;
    if (typeof callback === "function") callback();
  }

  logout(callback) {
    this.authenticated = false;
    this.id = "";
    this.role = "";
    if (typeof callback === "function")
      callback({
        authenticated: this.authenticated,
        id: this.id,
        role: this.role
      });
  }

  isAuthenticated() {
    return {
      authenticated: this.authenticated,
      id: this.id,
      role: this.role
    };
  }

  checkUser(callback) {
    const token = cookie.get("jwt");
    if (token) {
      const { role, id } = jwt.decode(token);
      this.login(id, role, callback);
    }
  }
}

export default new Auth();
