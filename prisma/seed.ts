import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    email: "ryangildea@gmail.com",
    name: "Ryan",
    password: "password-dangerous",
  },
  {
    email: "ryan@ryangildea.com",
    name: "Ryan For Business",
    password: "password-just-as-dangerous",
  },
];

async function main() {
  console.log(`Start seeding ...`);

  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log(`Seeding finished.`);
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
