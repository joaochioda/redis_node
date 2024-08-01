// Update with your config settings.
const path = require("path");
require("dotenv").config({ path: "../../.env" });

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
//load env variables
module.exports = {
  development: {
    client: "pg",
    connection: {
      database: process.env.DATABASE,
      host: process.env.HOST,
      port: process.env.PORT,
      user: process.env.USER_PG,
      password: process.env.PASSWORD,
    },
    migrations: {
      tableName: "knex_migrations",
    },
    seeds: {
      directory: path.resolve(__dirname, "seeds"),
    },
    useNullAsDefault: true,
  },
};
