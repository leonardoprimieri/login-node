module.exports = {
  register(req, res) {
    return res.render("register");
  },
  registerAction(req, res) {
    return res.send(req.body);
  },
  login(req, res) {
    return res.render("login");
  },
  loginAction(req, res) {
    return res.send(req.body);
  },
};
