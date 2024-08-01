const { Router } = require("express");
const knex = require("../../connections/knex");
const redis = require("../../connections/redis");

const UserController = require("../../controllers/userController");
const userController = new UserController(knex, redis);

const userRoutes = Router();

userRoutes.get("/v1/create-user", userController.createUser);
userRoutes.get("/v1/all-users", userController.allUsers);

module.exports = { userRoutes };
