const knex = require("../connections/knex");
const redis = require("../connections/redis");

const express = require("express");

const { userRoutes } = require("./user");

const routes = express.Router();

routes.use(userRoutes({ knex, redis }));

module.exports = { routes };
