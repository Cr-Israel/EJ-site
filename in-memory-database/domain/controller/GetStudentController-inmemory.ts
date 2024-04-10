import { FastifyReply, FastifyRequest } from "fastify";
import database from "../../../in-memory-database/database"
import { z } from "zod";

export class GetStudentControllerInmemory {
  async execute(request: FastifyRequest, reply: FastifyReply) {
    const getStudentParams = z.object({
      studentId: z.string()
    })

    const { studentId } = getStudentParams.parse(request.params)

    const student = await database.find((student) => student.studentId === studentId)

    if (!student) {
      return reply.status(404).send({ messsage: 'Estudante não encontrado' });
    }

    reply.send(student)
  }
}