import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { navStyles } from './Topnav.styles';

export default function Topnav({ scrolled }: { scrolled: boolean }) {
  const { classes, cx } = navStyles({ scrolled });
  const { pathname } = useRouter();
  const segment = pathname.split('/').pop() as string;

  const ref = useRef<HTMLDivElement>(null);
  const shade = useRef<HTMLDivElement>(null);
  const [enter, setEnter] = useState(false);
  const [rect, setRect] = useState<DOMRect | undefined>(undefined);

  useEffect(() => {
    const elm = shade.current;
    if (!elm) return;
    if (rect) {
      elm.style.width = rect.width + 'px';
      elm.style.transform = `translateX(${rect.left - 12}px)`;
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
    return () => {};
  }, [rect]);

  const links = [
    { href: '/ye/pro', label: 'Overview' },
    { href: '/ye/pro/registrasi', label: 'Pendaftaran' },
    { href: '/ye/pro/seleksi', label: 'Seleksi' },
    { href: '/ye/pro/interview', label: 'Wawancara' },
    { href: '/ye/pro/report', label: 'Laporan' },
    { href: '/ye/pro/billing', label: 'Billing' },
  ];

  return (
    <>
      <div ref={ref} className={classes.root}>
        <div className={classes.wrap}>
          <div
            style={{ position: 'relative', marginLeft: -8 }}
            onMouseLeave={(e) => setEnter(false)}
          >
            <div ref={shade} className={classes.shade}></div>
            {links.map((link) => (
              <Link href={link.href}>
                <a
                  className={cx(classes.item, { [classes.active]: pathname == link.href })}
                  onMouseOver={(e: React.MouseEvent) => {
                    setRect(e.currentTarget.getBoundingClientRect());
                    console.log('Mouse hover');
                  }}
                  onMouseOut={(e: React.MouseEvent) => setRect(undefined)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div style={{ height: scrolled ? ref.current?.getBoundingClientRect().height : 0 }} />
    </>
  );
}
