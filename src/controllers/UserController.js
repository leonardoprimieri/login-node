const User = require("../models/User");
module.exports = {
  async register(req, res) {
    return res.render("register");
  },
  async registerAction(req, res) {
    const newUser = new User(req.body);
    User.register(newUser, req.body.password, (error) => {
      if (error) {
        console.log("Aqui erro" + error);
        return res.redirect("/");
      }

      return res.redirect("/login");
    });
  },
  login(req, res) {
    return res.render("login");
  },
  loginAction(req, res) {
    const authenticateUser = User.authenticate();

    authenticateUser(req.body.email, req.body.password, (error, result) => {
      if (!result) return res.redirect("/login");

      req.login(result, () => {});

      return res.redirect("/");
    });
  },
  logout(req, res) {
    req.logout();
    return res.redirect("/");
  },
};
