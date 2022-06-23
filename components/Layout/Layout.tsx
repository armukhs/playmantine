import { useViewportSize, useWindowScroll } from '@mantine/hooks';
import { ReactNode, useEffect, useState } from 'react';
import AppHeader from '../Header/AppHeader';
import AppMenu from '../Navigation/AppMenu';
import AppSidebar from '../Sidebar/AppSidebar';
import { useStyles } from './Layout.styles';

export default function Layout({
  projectId,
  banner,
  children,
}: {
  projectId?: string;
  banner: ReactNode;
  children: ReactNode;
}) {
  const { classes, cx } = useStyles();
  const { width } = useViewportSize();
  const [scroll] = useWindowScroll();

  const [headerHeight, setHeaderHeight] = useState<number | undefined>(65);

  const header = 'header';

  useEffect(() => {
    setHeaderHeight(document.getElementById(header)?.clientHeight);
  }, []);

  function scrolled() {
    if (!width) false;
    return width <= 768 && scroll.y > (headerHeight as number);
  }

  return (
    <>
      <div id="header" className={cx(classes.header)}>
        <div className={classes.container}>
          <AppHeader />
        </div>
      </div>

      <AppMenu projectId={projectId} scrolled={scrolled()} />

      <div className={cx(classes.container, classes.affix)}>
        <div>{banner}</div>

        <div style={{ display: 'flex', alignItems: 'start' }}>
          <div className={classes.left}>
            <div className="">
              <AppSidebar projectId={projectId} />
            </div>
          </div>
          <div className={classes.right}>
            <main className={classes.main}>{children}</main>
          </div>
        </div>
      </div>

      <div style={{ height: 100 }}></div>

      <footer style={{ height: 300, backgroundColor: '#f0f0f0' }}></footer>
    </>
  );
}
