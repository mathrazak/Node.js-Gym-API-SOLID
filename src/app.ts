import { PrismaClient } from "@prisma/client/extension"
import fastify from "fastify"

export const app = fastify()

const prisma = new PrismaClient

prisma.user.create({
    data: {
        name: 'Matheus Sobreiro',
        email: 'matheus.sobreiro.fdsm@gmail.com',
    },
})