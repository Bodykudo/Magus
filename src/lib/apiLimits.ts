import { auth } from '@clerk/nextjs';
import prismadb from './prismadb';
import { MAX_FREE_COUNTS } from '@/src/constants';

export const increaseApiLimits = async () => {
  const { userId } = auth();
  if (!userId) return;

  const user = await prismadb.user.findUnique({
    where: {
      userId,
    },
  });

  if (user) {
    await prismadb.user.update({
      where: {
        userId,
      },
      data: {
        apiCount: user.apiCount + 1,
      },
    });
  } else {
    await prismadb.user.create({
      data: { userId, apiCount: 1 },
    });
  }
};

export const checkApiLimit = async () => {
  const { userId } = auth();

  if (!userId) return false;

  const user = await prismadb.user.findUnique({
    where: {
      userId,
    },
  });

  if (!user || user.apiCount < MAX_FREE_COUNTS) {
    return true;
  }

  return false;
};

export const getApiLimitCount = async () => {
  const { userId } = auth();

  if (!userId) return 0;

  const user = await prismadb.user.findUnique({
    where: { userId },
  });

  if (!user) {
    await prismadb.user.create({
      data: { userId, apiCount: 0 },
    });
    return 0;
  }

  return user.apiCount;
};
