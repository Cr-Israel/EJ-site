import { FastifyInstance } from "fastify";
import { z } from "zod";
import database from "../../in-memory-database/database"

export async function getStudent(app: FastifyInstance) {
  app.get('/get-student/:studentId', async (request, reply) => {
    const getStudentParams = z.object({
      studentId: z.string()
    })

    const { studentId } = getStudentParams.parse(request.params)

    const student = await database.find((student) => studentId === studentId)

    if (!student) {
      return reply.status(400).send({ messsage: 'Estudante não encontrado' });
    }

    reply.send(student)
  })
}