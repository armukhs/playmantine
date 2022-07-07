import { createStyles } from '@mantine/core';
export const layoutStyles = createStyles((theme) => ({
  container: {
    maxWidth: 1000,
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    '@media (min-width: 800px)': {
      paddingLeft: 32,
      paddingRight: 32,
    },
  },

  flex: {
    display: 'flex',
    alignItems: 'center',
  },

  // header

  header: {
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: 'white',
    borderBottom: '1px solid white',
    boxShadow: '0 0 3px rgba(100,100,100,.15)',
    zIndex: 9,
    '@media (min-width: 800px)': {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
    },
  },

  headerScrolled: {
    borderBottom: `1px solid ${theme.colors.gray[4]}`,
  },

  headerInner: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
  },

  navWrap: {
    '@media (min-width: 800px)': {
      display: 'none',
    },
  },

  navWrapScrolled: {
    marginBottom: 51,
  },

  nav: {
    backgroundColor: theme.colors.yellow[4],
    paddingTop: 15,
    paddingBottom: 15,
    borderBottom: '1px solid white',
    zIndex: 99,
  },

  navFixed: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
  },

  hero: {
    backgroundColor: theme.colors.gray[1],
    '@media (min-width: 800px)': {
      marginTop: 71,
      backgroundColor: theme.colors.yellow[3],
    },
  },

  heroInner: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 24,
    '@media (min-width: 800px)': {
      paddingTop: 36,
      paddingBottom: 36,
      paddingLeft: 36,
    },
  },

  pageWrap: {
    display: 'flex',
    alignItems: 'start',
    paddingBottom: 100,
    minHeight: `calc(100vh - 100px)`,
  },

  leftWrap: {
    // display: match ? 'block' : 'none',
    flexBasis: 220,
    flexShrink: 0,
    paddingRight: 50,
    paddingTop: 5,
    position: 'sticky',
    top: 103,
    display: 'none',
    '@media (min-width: 800px)': {
      display: 'block',
    },
  },

  footer: {
    minHeight: 200,
    paddingTop: 50,
    paddingBottom: 50,
    backgroundColor: theme.colors.yellow[3],
  },
  // pageWrap: {},
}));
