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

  console.log(orFiltering);
};

filtering();
