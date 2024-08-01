const { createClient } = require("redis");

// Crie uma instância do cliente Redis
const client = createClient({
  url: "redis://172.17.0.3:6379", // Altere o URL conforme a sua configuração
});

// Manipule eventos de erro
client.on("error", (err) => {
  console.error("Redis Client Error", err);
});

// Conecte-se ao Redis
client
  .connect()
  .then(() => console.log("Connected to Redis"))
  .catch((err) => console.error("Failed to connect to Redis", err));

// Exporte o cliente para uso em outros arquivos
module.exports = client;
