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

  // get specific user post which is are published true

  const userPublishedPost = await prisma.user.findMany({
    include: {
      post: {
        where: {
          published: true,
        },
      },
    },
  });

  console.dir(userPublishedPost, { depth: Infinity });
};

main();
