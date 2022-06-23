import Link from 'next/link';
import { createStyles, Skeleton, Text } from '@mantine/core';

export default function AppHeader() {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.inner}>
      <div className={classes.left}>
        <Text sx={{ fontSize: 18, letterSpacing: 1, fontWeight: 700 }}>ACES</Text>
        <Link href="/">
          <a>
            <Skeleton
              height={40}
              circle
              animate={false}
              sx={(theme) => ({ backgroundColor: 'red' })}
            />
          </a>
        </Link>
        <Link href="/projects">
          <a style={{ color: 'black', textDecoration: 'none' }}>
            <Text weight={700} style={{ fontSize: 15 }}>
              Mubarak Samadikan
            </Text>
          </a>
        </Link>
      </div>
      <div className="">
        <Skeleton height={28} circle animate={false} sx={(theme) => ({ backgroundColor: 'red' })} />
      </div>
    </div>
  );
}

export const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    alignItems: 'center',
    gap: 13,
    position: 'relative',
  },

  left: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    gap: 14,
  },
}));
