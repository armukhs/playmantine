import { Avatar, Button, Text, useMantineTheme } from '@mantine/core';
import { layoutStyles } from './Layout.styles';

export default function Header({ match, scrollY }: { match: boolean; scrollY: number }) {
  const theme = useMantineTheme();
  const { classes, cx } = layoutStyles();
  return (
    <>
      <div className={cx(classes.header, { [classes.headerScrolled]: match && scrollY > 143 })}>
        <div className={cx(classes.container)}>
          <div className={classes.headerInner}>
            <Avatar color="blue" src={null} alt="no image here" />
            <Text style={{ flexGrow: 1, fontWeight: 600 }}>Ludricus Tamben {scrollY}</Text>
            <Button
              styles={{
                root: {
                  backgroundColor: theme.colors.yellow[4],
                  borderRadius: 3,
                  color: theme.colors.dark,
                  ':hover': {
                    backgroundColor: theme.colors.yellow[5],
                  },
                },
              }}
            >
              Button
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
