import { createStyles } from '@mantine/core';
export const styles = createStyles((theme) => ({
  wrap: {
    maxWidth: 1024,
    paddingLeft: 16,
    paddingRight: 16,
    marginLeft: 'auto',
    marginRight: 'auto',
    '@media (min-width: 768px)': {
      paddingLeft: 24,
      paddingRight: 24,
    },
  },

  main: {
    // maxWidth: 640,
    marginLeft: 'auto',
    marginRight: 'auto',
    minHeight: 'calc(100vh - 200px)',
  },

  pageWrap: {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 50,
  },

  left: {
    display: 'none',
    '@media (min-width: 768px)': {
      position: 'sticky',
      top: 95,
      paddingTop: 10,
      display: 'flex',
      width: '22%',
      minWidth: 190,
      maxWidth: 210,
      paddingRight: 40,
    },
  },

  right: {
    flexGrow: 1,
    maxWidth: 600,
    '@media (min-width: 768px)': {
      width: '78%',
      minWidth: 520,
      maxWidth: 680,
    },
  },
}));
