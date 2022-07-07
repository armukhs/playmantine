import { createStyles } from '@mantine/core';
export const navStyles = createStyles((theme, { scrolled }: { scrolled: boolean }) => ({
  root: {
    top: scrolled ? 0 : 'auto',
    left: scrolled ? 0 : 'auto',
    right: scrolled ? 0 : 'auto',
    position: scrolled ? 'fixed' : 'relative',
    // borderBottom: '1px solid white',
    backgroundColor: theme.colors.yellow[4],
    zIndex: 99,
    '@media (min-width: 800px)': {
      display: 'none',
    },
  },

  wrap: {
    paddingLeft: 20,
    paddingRight: 20,
  },

  shade: {
    position: 'absolute',
    backgroundColor: theme.colors.yellow[2],
    borderRadius: 4,
    top: 10,
    width: 0,
    height: 28,
    transitionDuration: '0ms',
    transitionProperty: 'width, transform, opacity',
    transitionTimingFunction: 'ease',
  },

  item: {
    position: 'relative',
    display: 'inline-block',
    padding: 8,
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 14,
    lineHeight: 1.33334,
    color: theme.colors.gray[8],
    textDecoration: 'none',
    cursor: 'pointer',

    ':hover': {
      color: '#333',
    },

    ':before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      height: 0,
      left: 8,
      right: 8,
      bottom: 0,
      borderBottomWidth: 3,
      borderBottomStyle: 'solid',
      borderBottomColor: 'transparent',
    },
  },

  active: {
    ':before': {
      borderBottomColor: '#345',
    },
  },

  flex: {
    display: 'flex',
    alignItems: 'center',
    gap: 25,
    fontSize: 13.25,
    fontWeight: 500,
  },

  // root: {},
  // root: {},
  // root: {},
  // root: {},
  // root: {},
  // root: {},
  // root: {},
  // root: {},
}));
