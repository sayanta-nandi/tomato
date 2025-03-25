import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prisma: ReturnType<typeof prismaClientSingleton>;
}

const prisma = global.prisma || prismaClientSingleton();

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export { prisma };
