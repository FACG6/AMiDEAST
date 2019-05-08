import cookie from "browser-cookies";
import jwt from "jsonwebtoken";

class Auth {
  authenticated = false;
  id = "";
  role = "";
  level = "";

  login(id = "", role = "", level = "", callback) {
    this.authenticated = true;
    this.id = id;
    this.role = role;
    this.level = level;
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
      role: this.role,
      level: this.level
    };
  }

  checkUser(callback) {
    const token = cookie.get("jwt");
    if (token) {
      const { role, id, level } = jwt.decode(token);
      this.login(id, role, level, callback);
    }
  }
}

export default new Auth();
