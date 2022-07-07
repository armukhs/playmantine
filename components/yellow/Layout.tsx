import { ReactNode, useEffect, useState } from 'react';
import { useMediaQuery, useWindowScroll } from '@mantine/hooks';
import { layoutStyles } from './Layout.styles';
import Header from './Header';
import Hero from './Hero';
import MobileNav from './MobileNav';
import Sidebar from './Sidebar';
import Topnav from './Topnav';

export type PageDefinition = {
  type: string;
  projectType?: string;
  channel: string;
  channelTitle: string;
};

export default function Layout({ pdef, children }: { pdef: PageDefinition; children: ReactNode }) {
  const match = useMediaQuery('(min-width: 800px)');
  const [scroll, scrollTo] = useWindowScroll();
  const { classes } = layoutStyles();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  });

  return (
    <>
      <Header match={match} scrollY={scroll.y} />
      {/* {mounted && <MobileNav fixed={!match && scroll.y > 71} />} */}
      <Topnav scrolled={!match && scroll.y > 71} />
      <Hero type={pdef.projectType || 'Untitled'} title={pdef.channelTitle} />
      <div style={{ paddingTop: 32 }}>
        <div className={classes.container}>
          <div className={classes.pageWrap}>
            <div className={classes.leftWrap}>
              <Sidebar />
            </div>
            <div style={{ flexGrow: 1 }}>
              <div style={{ minHeight: '100vh' }}>{children}</div>
            </div>
          </div>
        </div>
      </div>
      <footer className={classes.footer}>
        <div className={classes.container}>FOO</div>
      </footer>
    </>
  );
}
