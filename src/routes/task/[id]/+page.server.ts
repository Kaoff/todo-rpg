import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async ({ params: { id } }) => {
  const task = await prisma.task.findUnique({ where: { id } });

  return { task };
}) satisfies PageServerLoad;
