import { createStyles } from '@mantine/core';
export const styles = createStyles(
  (
    theme,
    { round, contrast, withShadow }: { round?: boolean; contrast?: boolean; withShadow?: boolean }
  ) => ({
    wrap: {
      ':first-of-type': {
        marginTop: 10,
      },
    },

    root: {
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: 'white',
      borderRadius: round ? 3 : 0,
      border: `1px solid ${contrast ? theme.colors.gray[6] : theme.colors.gray[4]}`,
      // boxShadow: `4px 4px 0px ${theme.colors.gray[2]}`,
      // boxShadow: !round && withShadow ? `4px 4px 0px ${theme.colors.gray[2]}` : 'none',
    },

    rectShadow: {
      boxShadow: `4px 4px 0px ${theme.colors.gray[2]}`,
    },

    // round: { borderRadius: 3 },
    // contrast: { border: `1px solid ${theme.colors.gray[6]}` },
    // open: { borderColor: theme.colors.gray[5] },

    shadow: {
      display: 'block',
      position: 'absolute',
      top: 2,
      left: 2,
      right: -4,
      bottom: -4,
      borderRadius: 5,
      border: `2px solid ${theme.colors.gray[1]}`,
      backgroundColor: theme.colors.gray[3],
    },

    headerWrap: {
      marginBottom: 0,
      padding: '10px 15px',
      display: 'flex',
      gap: 15,
      alignItems: 'center',
      // borderBottom: `1px solid ${theme.colors.gray[4]}`,
      borderBottom: `1px solid ${contrast ? theme.colors.gray[6] : theme.colors.gray[4]}`,
    },

    headerLabel: {
      flexGrow: 1,
      minHeight: 24,
      fontWeight: 800,
    },

    headerControl: {
      borderRadius: 0,
      color: theme.colors.dark,
      backgroundColor: theme.colors.gray[2],
      boxShadow: `1px 1px 0px ${theme.colors.dark[0]}`,
      ':hover': {
        backgroundColor: theme.colors.gray[1],
      },
      ':active': {
        backgroundColor: theme.colors.gray[2],
        boxShadow: 'none',
      },
    },

    // Content

    content: {
      padding: 15,
      // borderBottom: `1px solid ${theme.colors.gray[5]}`,
      borderBottom: `1px solid ${contrast ? theme.colors.gray[6] : theme.colors.gray[4]}`,
      marginBottom: -1,
    },

    // Accordion

    controlWrap: {
      // margin: `0 -15px -15px`,
    },

    control: { display: 'none' },

    controlItem: {
      borderTop: `0 none`,
      borderBottom: `0 none`,
    },

    controlOpened: {
      backgroundColor: 'white',
      borderColor: 'red',
      // borderTop: `1px solid ${theme.colors.gray[5]}`,
      borderTop: `1px solid ${contrast ? theme.colors.gray[6] : theme.colors.gray[4]}`,
    },

    controlContent: {
      padding: `10px 15px`,
    },

    controlContentInner: {
      padding: 0,
      // backgroundColor: 'gray',
    },

    // headerControl: {},
    //
  })
);
