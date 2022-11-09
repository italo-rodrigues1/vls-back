const express = require("express");
const bodyParser = require("body-parser");
const verifyJwt = require("./src/middlewares/jwtVerify");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");
const app = express();
const dotenv = require("dotenv");

global.appRoot = path.resolve(__dirname, "src");
let envFile = ".env.localhost";

// if (process.env.NODE_ENV === "localhost") {
//   envFile = ".env.localhost";
// }

global.appRoot = path.resolve(__dirname, "src");

dotenv.config();

const envConfig = dotenv.parse(
  fs.readFileSync(path.join(__dirname, "envs", envFile))
);

for (const e in envConfig) {
  process.env[e] = envConfig[e];
  console.log("Vsl > Var > ", e, " > ", envConfig[e]);
}

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(process.env.MONGODB_URL, options)
  .then(() => {
    console.log("Vsl > MongoDb Connect >  successfully");

    app.use(cors());
    app.options("*", cors());
    // app.use(bodyParser);
    app.use(express.json());
    app.use((_req, res, next) => {
      res.setHeader("X-XSS-Protection", "1; mode=block");
      next();
    });

    app.use("/auth", require("./src/routes/auth"));

    app.use("/api", require("./src/routes"));
    console.log("Aqui 1");

    //front server
    const root = path.join(__dirname, "public");

    app.use(express.static(root));

    app.get("*", (_req, res) => {
      res.sendFile("Rota not exist", { root });
    });

    app.set("port", process.env.PORT || process.env.PORT_FORCE);

    app.listen(process.env.PORT || 5000, () => {
      console.log("Vsl > Server is running on port 5000");
    });
  })
  .catch((err) => {
    console.log("Vsl > MongoDb Connect > failed", err);
  });
