import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    paddingTop: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    zIndex: 1,
    borderBottomColor: theme.colors.gray[2],
    backgroundColor: 'white',

    '@media (max-width: 768px)': {
      position: 'relative',
      // paddingTop: 12,
      // paddingBottom: 12,
    },
  },

  inner: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    position: 'relative',
    maxWidth: 1000,
    paddingLeft: 32,
    paddingRight: 32,
    marginLeft: 'auto',
    marginRight: 'auto',

    '@media (max-width: 768px)': {
      paddingLeft: 20,
      paddingRight: 20,
    },
  },

  left: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    gap: 20,
  },
}));
