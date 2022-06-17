import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    position: 'relative',
    marginLeft: -12,
    marginBottom: -1,
  },
  shade: {
    position: 'absolute',
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    top: 10,
    width: 0,
    height: 32,
    transitionDuration: '0ms',
    transitionProperty: 'width, transform, opacity',
    transitionTimingFunction: 'ease',
  },
  item: {
    position: 'relative',
    display: 'inline-block',
    padding: 12,
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 15,
    lineHeight: 1.33334,
    color: 'gray',
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
      left: 12,
      right: 12,
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
