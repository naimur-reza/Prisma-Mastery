import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
  ],
});

prisma.$on("query", (e) => {
  console.log("Duration ", e.duration),
    console.log("Query ", e.query),
    console.log("Timestamps ", e.timestamp);
});

const logging = async () => {
  const user = await prisma.user.findMany();
};

logging();
