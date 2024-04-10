import { FastifyInstance } from "fastify";
import { CreateStudentController } from "../domain/controllers/CreateStudentController";

export async function createStudent(app: FastifyInstance) {
  app.post('/create', new CreateStudentController().execute)
}