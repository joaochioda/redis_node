//acess docker postgres
docker exec -it 39cd8b30f223 bash

//para acessar o banco de dados postgres como o usuário padrão postgres, você pode usar:
psql -U template1

src/database {
knex migrate:make create_users_table - create migration
knex seed:make populate_users - create seed
}

npm run migrate -> run migration
npm run seed -> run seed
