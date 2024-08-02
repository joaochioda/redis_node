const { Router } = require("express");

const userRoutes = (injections) => {
  const UserController = require("../../controllers/userController");
  const userController = new UserController(injections);

  const useRoutes = Router();

  useRoutes.get("/v1/create-user", userController.createUser);
  useRoutes.get("/v1/all-users", userController.allUsers);

  return useRoutes;
};

module.exports = { userRoutes };
