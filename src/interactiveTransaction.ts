import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const interactiveTransaction = async () => {
  return prisma.$transaction(async (tx) => {
    const user = await tx.user.create({
      data: {
        email: "tx@transaction.com",
        username: "transaction_123",
      },
    });

    console.log(user);

    const profile = await tx.profile.create({
      data: {
        userId: 2,
        bio: "transaction_is_real!!!!!",
      },
    });

    console.log(profile);
  });
};

interactiveTransaction();
