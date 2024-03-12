import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // fluent api
  const userPost = await prisma.user
    .findUnique({
      where: {
        id: 1,
      },
    })
    .post();

  console.log(userPost);
};

main();
