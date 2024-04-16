import { FastifyInstance } from "fastify";
import { GetAllStudentController } from "../domain/controllers/GetAllStudentController";

export async function getAllStudent(app: FastifyInstance) {
  app.get('/get-all', new GetAllStudentController().execute)
}