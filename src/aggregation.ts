import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const aggregation = async () => {
  const totalPost = await prisma.post.count();
  console.log(totalPost);
};

aggregation();
