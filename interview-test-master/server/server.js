const fastify = require("fastify");
const faker = require("faker");
const cors = require("fastify-cors");

const PORT = 8099;
const server = fastify({ logger: true });

server.register(cors, { origin: true });

function createUser(minAge, maxAge) {
  return {
    age: Math.floor(Math.random() * (maxAge - minAge + 1) + minAge),
    country: faker.address.country(),
    email: faker.internet.email(),
    name: {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
    },
  };
}

function createUsers(minAge, maxAge, limit) {
  const users = [];

  for (let i = 0; i < limit; i++) {
    users.push(createUser(minAge, maxAge));
  }

  const duplicatedUser = createUser(minAge, maxAge);
  duplicatedUser.name.firstName = "Bob";
  duplicatedUser.name.lastName = "Bissonnette";
  users.push(duplicatedUser);

  return users;
}

server.get("/users/kids/:minAge/:maxAge", async (req, reply) => {
  const { minAge } = req.params;
  const { maxAge } = req.params;

  const users = createUsers(0, 18, 15);

  const filterUsersByAge = users.filter(
    (user) => user.age >= minAge && user.age <= maxAge
  );

  reply.send({ data: filterUsersByAge });
});

server.get("/users/adults/:minAge/:maxAge", async (req, reply) => {
  const { minAge } = req.params;
  const { maxAge } = req.params;
  const users = createUsers(19, 60, 15);
  const filterUsersByAge = users.filter(
    (user) => user.age >= minAge && user.age <= maxAge
  );

  reply.send({ data: filterUsersByAge });
});

server.get("/users/seniors/:minAge/:maxAge", async (req, reply) => {
  const { minAge } = req.params;
  const { maxAge } = req.params;
  const users = createUsers(61, 100, 15);
  const filterUsersByAge = users.filter(
    (user) => user.age >= minAge && user.age <= maxAge
  );

  reply.send({ data: filterUsersByAge });
});

async function start() {
  try {
    await server.listen(PORT);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

start();
