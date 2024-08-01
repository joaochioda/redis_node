const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, ".env"),
});

const cors = require("cors");

const { routes } = require("./src/routes");

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
  credentials: true,
};

const express = require("express");

const app = express();

app.use(express.json());

app.use(cors(corsOptions));

app.use(routes);

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
