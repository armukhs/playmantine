import { Container, Header, Space } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { DEFAULT_WIDTH } from '../Layout/Layout';
import NavItem from './NavItem';
import { useStyles } from './NavStyles.styles';

export default function SiteNav() {
  const [scroll] = useWindowScroll();
  const { pathname } = useRouter();
  const { classes } = useStyles();

  const ref = useRef<HTMLDivElement>(null);
  const shade = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [enter, setEnter] = useState(false);
  const [rect, setRect] = useState<DOMRect | undefined>(undefined);

  const resizeHandler = (event: Event) => {
    const el = ref.current;
    if (el) setWidth(el.getBoundingClientRect().left);
  };

  useEffect(() => {
    const el = ref.current;
    if (el) setWidth(el.getBoundingClientRect().left);
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  useEffect(() => {
    const elm = shade.current;
    if (!elm) return;
    if (rect) {
      elm.style.width = rect.width + 'px';
      elm.style.transform = `translateX(${rect.left - width}px)`;
      elm.style.opacity = '1';
      if (!enter) {
        elm.style.transitionDuration = `0ms`;
        setEnter(true);
      } else {
        elm.style.transitionDuration = '200ms';
      }
    } else {
      elm.style.opacity = '0';
      elm.style.transitionDuration = `0ms`;
    }
  }, [rect]);

  const links = [
    { href: '/ui/projects', label: 'Projects' },
    { href: '/ui/clients', label: 'Clients' },
    { href: '/ui/team', label: 'Team' },
    { href: '/ui/settings', label: 'Settings' },
  ];

  return (
    <>
      <Space h={scroll.y >= 58 ? 50 : 0} />
      <Header height="auto" sx={{ marginBottom: 0 }} fixed={scroll.y >= 58}>
        <Container size={DEFAULT_WIDTH} px={20}>
          <div ref={ref} className={classes.wrapper} onMouseLeave={(e) => setEnter(false)}>
            <div ref={shade} className={classes.shade}></div>
            {links.map((item) => (
              <NavItem
                key={item.href}
                active={pathname == item.href}
                handler={setRect}
                label={item.label}
                href={item.href}
              />
            ))}
          </div>
        </Container>
      </Header>
    </>
  );
}
