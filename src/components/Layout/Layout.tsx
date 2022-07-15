import { ReactNode } from 'react';
import Header from 'components/Header/Header';
import Wrap from './Wrap';
import { styles } from './Layout.styles';

export default function Layout({
  match,
  scroll,
  hero,
  topnav,
  sidebar,
  children,
}: {
  scroll: number;
  match: boolean;
  topnav: ReactNode;
  hero: ReactNode;
  sidebar: ReactNode;
  children: ReactNode;
}) {
  const { classes, cx } = styles();
  return (
    <>
      <Header match={match} scroll={scroll} />
      {topnav}
      {hero}
      <Wrap>
        <div className={classes.pageWrap}>
          <div id="sidebar" className={classes.left}>
            {sidebar}
          </div>
          <div className={classes.right}>
            <div className={classes.main}>{children}</div>
          </div>
        </div>
      </Wrap>
      <footer
        style={{
          borderTop: '1px solid #ccc',
          padding: '30px 0',
          backgroundColor: '#f0f0f0',
          textAlign: 'center',
        }}
      >
        <Wrap>FOOTER</Wrap>
      </footer>
    </>
  );
}
