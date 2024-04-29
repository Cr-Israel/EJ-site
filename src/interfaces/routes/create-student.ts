import { FastifyInstance } from "fastify";
import { CreateStudentController } from "../controllers/CreateStudentController";

export async function createStudent(app: FastifyInstance) {
  app.post('/create', new CreateStudentController().execute)
}