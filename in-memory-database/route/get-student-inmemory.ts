import { FastifyInstance } from "fastify";
import { GetStudentControllerInmemory } from "../domain/controller/GetStudentController-inmemory";

export async function getStudentInMemory(app: FastifyInstance) {
  app.get('/get-student/:studentId', new GetStudentControllerInmemory().execute)
}