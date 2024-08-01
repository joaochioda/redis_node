const UserService = require("../services/userService");

class UserController {
  constructor(knex, redis) {
    this.userService = new UserService(knex, redis);
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
    const usersInRedis = await this.userService.getUsersFromRedis();
    if (usersInRedis) {
      res.status(200).json({
        users: usersInRedis,
      });
      console.timeEnd("tempoDeExecucao");
      return;
    }

    const users = await this.userService.allUsers();
    await this.userService.saveUsersToRedis(users);
    res.status(200).json({
      users,
    });
    console.timeEnd("tempoDeExecucao");
  };
}

module.exports = UserController;
