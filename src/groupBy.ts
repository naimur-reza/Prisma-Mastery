import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const groupBy = async () => {
  const groupBy = await prisma.post.groupBy({
    by: "published",
    _count: {
      published: true,
    },
  });

  console.log(groupBy);
};

groupBy();
