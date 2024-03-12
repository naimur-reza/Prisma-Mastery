import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // const createUser = await prisma.user.create({
  //   data: {
  //     email: "user@gmail.com",
  //     username: "user1",
  //     role: Role.user,
  //   },
  // });
  // console.log(createUser);

  // const createProfile = await prisma.profile.create({
  //   data: {
  //     userId: 1,
  //     bio: "My life my rules",
  //   },
  // });

  // console.log(createProfile);

  // const createCategory = await prisma.category.create({
  //   data: {
  //     name: "Software engineering",
  //   },
  // });

  const updatePost = await prisma.post.create({
    data: {
      title: "Tailwind v.4 alpha max",
      content:
        "This is superb impressive. We have to try it as fast as possible",
      authorId: 1,
      postCategory: {
        // create: {
        //   category: {
        //     connect: {
        //       id: 1,
        //     },
        //   },
        // },

        create: [
          { categoryId: 1 },
          { categoryId: 2 },
          { categoryId: 3 },
          { categoryId: 4 },
        ],
      },
    },
  });
};

main();
