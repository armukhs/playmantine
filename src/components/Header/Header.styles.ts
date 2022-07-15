import { createStyles } from '@mantine/core';
export const styles = createStyles((theme) => ({
  wrapper: {
    paddingBottom: 0,
    '@media (min-width: 768px)': {
      paddingBottom: 71,
    },
  },
  root: {
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: 'white',
    borderBottom: '1px solid white',
    // boxShadow: '0 0 3px rgba(100,100,100,.15)',
    zIndex: 9,
    '@media (min-width: 768px)': {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
    },
  },

  scrolled: {
    boxShadow: '0 0 3px rgba(100,100,100,.15)',
    borderBottom: `1px solid ${theme.colors.gray[4]}`,
  },

  wrap: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
  },

  // wrap: {},
}));
