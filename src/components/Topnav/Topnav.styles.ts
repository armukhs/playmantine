import { createStyles } from '@mantine/core';
export const navStyles = createStyles(
  (theme, { fixed, scroll }: { fixed?: boolean; scroll?: number }) => ({
    root: {
      top: fixed ? 0 : 'auto',
      left: fixed ? 0 : 'auto',
      right: fixed ? 0 : 'auto',
      position: fixed ? 'fixed' : 'relative',
      borderTop: `1px solid ${theme.colors.gray[3]}`,
      borderBottom:
        scroll && scroll > 163
          ? `1px solid ${theme.colors.gray[4]}`
          : `1px solid ${theme.colors.gray[2]}`,
      backgroundColor: theme.white,
      boxShadow: scroll && scroll > 163 ? '0 1px 3px rgba(100,100,100,.15)' : 'none',
      zIndex: 99,
      '@media (min-width: 768px)': {
        // display: 'none', -> if none we cant have width
        height: 0,
        overflow: 'hidden',
        border: 'none',
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

    flex: {
      display: 'flex',
      alignItems: 'center',
      fontSize: 13.25,
      fontWeight: 500,
    },

    item: {
      position: 'relative',
      display: 'inline-block',
      padding: 12,
      paddingTop: 15,
      paddingBottom: 15,
      fontSize: 13.5,
      fontWeight: 500,
      lineHeight: 1.33334,
      color: theme.colors.gray[8],
      textDecoration: 'none',
      cursor: 'pointer',

      ':hover': {
        color: theme.colors.orange[6],
        // backgroundColor: theme.colors.gray[1],
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
      ':hover': {
        color: theme.colors.gray[8],
      },
    },

    hidden: { display: 'none' },
    // root: {},
    // root: {},
    // root: {},
    // root: {},
    // root: {},
    // root: {},
    // root: {},
  })
);
