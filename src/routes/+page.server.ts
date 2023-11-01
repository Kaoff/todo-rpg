import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
  const response = await prisma.list.findMany({
    include: { tasks: true }
  });

  return { feed: response };
}) satisfies PageServerLoad;
