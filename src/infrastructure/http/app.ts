import fastify from "fastify";

import { getStudent } from "../../interfaces/routes/get-student";
import { getAllStudent } from "../../interfaces/routes/get-all-student";
import { createStudent } from "../../interfaces/routes/create-student";


const app = fastify();

app.register(getStudent)
app.register(getAllStudent)
app.register(createStudent)

export { app }