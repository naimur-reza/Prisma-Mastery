import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // const post = await prisma.post.create({
  //   data: {
  //     title: "Post1",
  //     content: "New content",
  //     author: "Anik",
  //     ageRestriction: 19,
  //   },
  // });
  // console.log(post);
  const getAllPost = await prisma.post.findMany({
    take: 5,
    cursor: {
      id: 3,
    },
  });
  console.log({ getAllPost });

  // const updatePost = await prisma.post.update({
  //   where: {
  //     id: 1,
  //   },
  //   data: {
  //     title: "Updated title1",
  //     content: "Content updated",
  //   },
  // });
};

main();
