import { createStyles } from '@mantine/core';
export const styles = createStyles((theme) => ({
  root: {},
  tabsListWrapper: {
    borderBottom: `1px solid ${theme.colors.dark[2]}`,
    paddingLeft: 12,
    paddingRight: 12,
  },
  tabsList: {},
  tabControl: {
    fontSize: 14,
    fontWeight: 500,
    marginRight: 2,
    height: 34,
    backgroundColor: theme.colors.gray[1],
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
    borderWidth: '1px 1px 0 1px',
    borderStyle: 'solid',
    borderColor: 'transparent',
    padding: '3px 14px 3px 14px',
    borderTopLeftRadius: theme.radius.sm,
    borderTopRightRadius: theme.radius.sm,

    '&:not(:first-of-type)': {},

    '&:first-of-type': {},

    '&:last-of-type': {},
  },
  tabActive: {
    marginBottom: -1,
    marginTop: -1,
    height: 36,
    borderColor: theme.colors.dark[2],
    borderBottom: '1px solid white',
    backgroundColor: 'white',
  },
  tabInner: {
    fontSize: 14,
  },
  tabIcon: {
    marginRight: 0,
  },
}));
