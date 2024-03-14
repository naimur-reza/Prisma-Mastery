import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const raw_query = async () => {
  //   const users = await prisma.$queryRaw`SELECT * FROM "posts"`;

  // delete specific user by raw query with  associate posts

  const deleteUser = await prisma.$queryRaw`TRUNCATE "users"  CASCADE`;

  console.log(deleteUser);
};

raw_query();
