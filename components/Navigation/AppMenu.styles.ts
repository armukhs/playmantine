import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'none',
    '@media (max-width: 768px)': {
      display: 'block',
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 0,
      paddingBottom: 0,
      borderBottomStyle: 'solid',
      borderBottomWidth: 1,
      backgroundColor: 'white',
      borderBottomColor: theme.colors.gray[3],
      zIndex: 100,
    },
  },

  fixed: {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
  },

  shade: {
    position: 'absolute',
    backgroundColor: theme.colors.gray[1],
    borderRadius: 4,
    top: 8,
    width: 0,
    height: 32,
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
    color: theme.colors.gray[7],
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
}));
