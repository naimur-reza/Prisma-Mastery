import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const batch = async () => {
  const newUser = prisma.user.create({
    data: {
      email: "john@hotmail.com",
      username: "john_12",
    },
  });

  const updateUser = prisma.user.update({
    where: {
      id: 4,
    },
    data: {
      email: "john@gmail.com",
    },
  });

  const [userData, updatedData] = await prisma.$transaction([
    newUser,
    updateUser,
  ]);

  console.log(userData), console.log(updatedData);
};

batch();
