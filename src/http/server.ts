import fastify from "fastify";
import { getStudent } from "../routes/get-student";
import { createStudent } from "../routes/create-student";
import { getAllStudent } from "../routes/get-all-student";

const app = fastify();

app.register(getStudent)
app.register(getAllStudent)
app.register(createStudent)

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running!')
})