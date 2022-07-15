import { Avatar, Button, Text, useMantineTheme } from '@mantine/core';
import Wrap from 'components/Layout/Wrap';
import Link from 'next/link';
import { styles } from './Header.styles';

export default function Header({ match, scroll }: { match: boolean; scroll: number }) {
  const theme = useMantineTheme();
  const { classes, cx } = styles();
  return (
    <div>
      <div className={cx(classes.wrapper)}></div>
      <div className={cx(classes.root, { [classes.scrolled]: match && scroll && scroll > 119 })}>
        <Wrap>
          <div className={classes.wrap}>
            <Avatar color="blue" src={null} alt="no image here" />
            <div style={{ flexGrow: 1, fontWeight: 600 }}>
              <Link href="/">
                <a style={{ color: 'black', textDecoration: 'none' }}>Aces Partner</a>
              </Link>
            </div>
            {/* <Text style={{ flexGrow: 1, fontWeight: 600 }}>Ludricus Tamben</Text> */}
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
        </Wrap>
      </div>
    </div>
  );
}
