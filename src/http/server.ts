import fastify from "fastify";
import { getStudent } from "../routes/get-student";
import { createStudent } from "../routes/create-student";

const app = fastify({ logger: true });

app.register(getStudent)
app.register(createStudent)

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running!')
})