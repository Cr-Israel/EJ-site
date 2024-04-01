import fastify from "fastify";
import { getStudent } from "../routes/get-student";
const app = fastify();

app.register(getStudent)

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running!')
})