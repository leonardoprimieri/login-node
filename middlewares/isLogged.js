module.exports.verifyLogin = (req, res, next) => {
  if (!req.user) return res.send("Você não pode acessar isso!");

  next();
};
