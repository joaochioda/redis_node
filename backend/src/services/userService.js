function randomString(length) {
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
  let randomstring = "";
  for (let i = 0; i < length; i++) {
    const rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum, rnum + 1);
  }
  return randomstring;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class UserService {
  constructor(knex, redis) {
    this.knex = knex;
    this.redis = redis;
  }
  /*
    table.string("id").primary();
    table.decimal("token", 8, 5);
    table.string("refresh_token");
    table.integer("first_mint");
    table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
    table.timestamp("updated_at").notNullable().defaultTo(knex.fn.now());
  */

  createUser() {
    const primary = randomInt(1, 1000000000);
    const id = randomString(16);
    return this.knex("users")
      .insert({
        id: primary,
        token: randomInt(1, 100),
        refresh_token: id,
        first_mint: Math.floor(Date.now() / 1000),
      })
      .returning("*");
  }

  saveUsersToRedis(users) {
    this.redis.set("users", JSON.stringify(users));
    // expires in 10 seconds
    this.redis.expire("users", 10);
  }

  getUsersFromRedis() {
    return this.redis.get("users").then((users) => {
      if (users) {
        return JSON.parse(users);
      }
      return null;
    });
  }

  allUsers() {
    return this.knex("users").select("*");
  }
}

module.exports = UserService;
