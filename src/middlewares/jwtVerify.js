const jwt = require("jsonwebtoken");

const verifyJwt = (req, res, next) => {
  console.log("verifyJwt", req.headers);
  let token = req.headers.authorization.split(" ")[1];
  // token = token.toString();
  console.log("token", typeof token);

  if (!token) {
    return res.status(401).send({ auth: false, message: "No token provided." });
  }

  jwt.verify(token, "secret", (err, decoded) => {
    console.log("err", err, decoded);

    if (err)
      return res
        .status(500)
        .send({ auth: false, message: "Failed to authenticate token." });

    // se tudo estiver ok, salva no request para uso posterior
    req.user = decoded;
  });
  next();
};
module.exports = verifyJwt;
