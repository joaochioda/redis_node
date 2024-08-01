const UserService = require("../services/userService");

class UserController {
  constructor(knex) {
    this.userService = new UserService(knex);
  }
  createUser = async (req, res) => {
    for (let i = 0; i < 10000; i++) {
      const user = await this.userService.createUser();
    }
    res.status(201).json({
      message: "User created",
    });
  };

  allUsers = async (req, res) => {
    console.time("tempoDeExecucao");
    const users = await this.userService.allUsers();
    console.log(users.length);
    res.status(200).json({
      users,
    });
    console.timeEnd("tempoDeExecucao");
  };
}

module.exports = UserController;
