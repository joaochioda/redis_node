const express = require("express");

const { userRoutes } = require("./user");

const routes = express.Router();

routes.use(userRoutes);

module.exports = { routes };
