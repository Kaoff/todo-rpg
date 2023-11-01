import { PrismaClient } from '@prisma/client';
import userData from '../src/lib/data.json';

const prisma = new PrismaClient();

const main = async () => {
  console.log('Start seeding ...');

  for (const p of userData.users) {
    const user = await prisma.user.create({
      data: {
        name: p.name,
        email: p.email,
        lists: {
          create: p.lists.map((l) => ({
            name: l.name,
            tasks: {
              create: l.tasks.map((t) => ({
                name: t.name,
                description: t.description,
                status: 'TODO'
              }))
            }
          }))
        }
      }
    });

    console.log('Created user with id: ' + user.id);
  }
  console.log('Seeding finished.');
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
