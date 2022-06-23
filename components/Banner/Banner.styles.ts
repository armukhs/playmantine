import { createStyles } from '@mantine/core';
export const useStyles = createStyles((theme) => ({
  wrap: {
    display: 'flex',
    alignItems: 'center',
    gap: 30,
    paddingTop: 30,
    paddingBottom: 40,
  },

  title: {
    flexGrow: 1,
    fontSize: 36,
    letterSpacing: -1,
    fontWeight: 800,
    marginTop: 0,
    marginBottom: 0,
    color: theme.colors.dark[4],
  },
}));
