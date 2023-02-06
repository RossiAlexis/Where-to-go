import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  await prisma.gastronomicPlace.deleteMany();
  // await prisma.gastronomicPlace.create({
  //   data: {
  //     name: "Piacere",
  //     description: "A place to eat the best italian pasta in the world",
  //   },
  // });
  // await prisma.gastronomicPlace.create({
  //   data: {
  //     name: "King beer",
  //     description: "The king of craft beer",
  //   },
  // });
  // await prisma.gastronomicPlace.create({
  //   data: {
  //     name: "Brunch",
  //     description: "Specialty coffee, brunch, and lunch",
  //   },
  // });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
