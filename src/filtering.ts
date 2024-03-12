import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const filtering = async () => {
  const andFiltering = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: "Tailwind",
          },
        },
        {
          published: true,
        },
      ],
    },
  });

  //   console.log(andFiltering);
  const orFiltering = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: "Tailwind",
          },
        },
        {
          published: true,
        },
      ],
    },
  });

  //   console.log(orFiltering);
  const notFiltering = await prisma.post.findMany({
    where: {
      NOT: [
        {
          title: {
            contains: "max",
          },
        },
      ],
    },
  });

  //   console.log(notFiltering);

  const startsWith = await prisma.user.findMany({
    where: {
      email: {
        startsWith: "m",
      },
    },
  });
  console.log(startsWith);
};

filtering();
