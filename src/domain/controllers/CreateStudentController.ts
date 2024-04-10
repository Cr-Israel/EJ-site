import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../../lib/prisma";
import { z } from "zod";

export class CreateStudentController {
  async execute(request: FastifyRequest, reply: FastifyReply) {
    const createStudentBody = z.object({
      name: z.string(),
      lastname: z.string(),
      course: z.string(),
      github: z.string(),
      email: z.string(),
      hardskills: z.array(z.string()),
      softskills: z.array(z.string()),
      // projects: z.array(z.object({
      //   name: z.string(),
      //   description: z.string()
      // }))
    })

    const {
      name,
      lastname,
      course,
      github,
      email,
      hardskills,
      softskills,
      // projects
    } = createStudentBody.parse(request.body)

    const student = await prisma.student.create({
      data: {
        name,
        lastname,
        course,
        github,
        email,
        hardskills: {
          createMany: {
            data: hardskills.map(hardskill => {
              return { name: hardskill }
            })
          }
        },
        softskills: {
          createMany: {
            data: softskills.map(softskill => {
              return { name: softskill }
            })
          }
        },
        // projects: {
        //   createMany: {
        //     data: projects.map(project => {
        //       return { name: project, description: project }
        //     })
        //   }
        // }
      }
    })
    return reply.status(201).send({ studentId: student.id })
  }
}