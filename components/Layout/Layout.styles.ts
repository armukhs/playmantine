import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  container: {
    maxWidth: 1000,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 32,
    paddingRight: 32,

    '@media (max-width: 768px)': {
      paddingLeft: 20,
      paddingRight: 20,
    },
  },

  affix: {
    paddingTop: 65,

    '@media (max-width: 768px)': {
      paddingTop: 0,
    },
  },

  header: {
    paddingTop: 12,
    paddingBottom: 12,
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray[3],
    backgroundColor: 'white',
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 99,

    '@media (max-width: 768px)': {
      position: 'relative',
    },
  },

  topmenu: {
    display: 'none',

    '@media (max-width: 768px)': {
      display: 'block',
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 14,
      paddingBottom: 14,
      borderBottomStyle: 'solid',
      borderBottomWidth: 1,
      backgroundColor: 'white',
      borderBottomColor: theme.colors.gray[3],
      zIndex: 100,
    },
  },

  topmenuFixed: {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
  },

  left: {
    flexBasis: 210,
    flexShrink: 0,
    position: 'sticky',
    top: 95,
    paddingRight: 50,
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },

  right: {
    flexGrow: 1,
    minHeight: 'calc(100vh - 250px)',
  },

  main: {
    '@media (max-width: 768px)': {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
}));
