import { createStyles } from '@mantine/core';
export const elementStyles = createStyles((theme) => ({
  box: {
    backgroundColor: 'white',
    border: `1px solid ${theme.colors.gray[6]}`,
    boxShadow: `4px 4px 0px ${theme.colors.gray[3]}`,
  },

  btnPrimary: {
    borderRadius: 0,
    color: theme.colors.dark,
    backgroundColor: theme.colors.yellow[4],
    boxShadow: `2px 2px 0px ${theme.colors.dark[3]}`,
    ':hover': {
      backgroundColor: theme.colors.yellow[3],
    },
    ':active': {
      backgroundColor: theme.colors.yellow[4],
      boxShadow: `1px 1px 0px ${theme.colors.dark[4]}`,
    },
  },

  btnSecondary: {
    borderRadius: 0,
    color: theme.colors.dark,
    backgroundColor: theme.colors.gray[2],
    boxShadow: `2px 2px 0px ${theme.colors.dark[3]}`,
    ':hover': {
      backgroundColor: theme.colors.gray[1],
    },
    ':active': {
      backgroundColor: theme.colors.gray[2],
      boxShadow: `1px 1px 0px ${theme.colors.dark[4]}`,
    },
  },
  // xxx: {},
  // xxx: {},
  // xxx: {},
  // xxx: {},
  // xxx: {},
}));
