module.exports = {
  index(req, res) {
    console.log(req.user);
    return res.render("home");
  },
  secret(req, res) {
    return res.send("Área secreta!");
  },
};
