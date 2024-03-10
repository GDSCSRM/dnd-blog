import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function seed() {
  const user = await prisma.user.create({
    data: {
      name: "Siam",
      email: "siam@gdscsrm.com",
      username: "siam",
      password: await bcrypt.hash("password", 10),
    },
  });

  for (let i = 0; i < 6; i++) {
    const article = await prisma.article.create({
      data: {
        title: "Example large article title that's enlarged will go up here, cause this's only a placeholder.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum.",
        category: "Technology",
        authorId: user.id,
      },
    });
  }
}

seed()
  .then(async () => {
    await prisma.$disconnect();
    console.log("Seed complete");
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
