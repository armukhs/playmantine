import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useStyles } from './AppMenu.styles';

const defaultLinks = [
  { href: '/projects', label: 'Projects' },
  { href: '/clients', label: 'Clients' },
  { href: '/team', label: 'Team' },
  { href: '/settings', label: 'Settings' },
];

const projectLinks = [
  { href: '/overview', label: 'Overview' },
  { href: '/modules', label: 'Modules' },
  { href: '/persona', label: 'Persona' },
  { href: '/deployment', label: 'Deployment' },
  { href: '/reports', label: 'Reports' },
];

export default function AppMenu({
  projectId,
  scrolled,
}: {
  projectId?: string;
  scrolled: boolean;
}) {
  const { classes, cx } = useStyles();
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
  }, [rect]);

  const links = projectId ? projectLinks : defaultLinks;

  return (
    <>
      <div ref={ref} className={cx(classes.wrapper, { [classes.fixed]: scrolled })}>
        <div style={{ position: 'relative', marginLeft: -8 }} onMouseLeave={(e) => setEnter(false)}>
          <div ref={shade} className={classes.shade}></div>
          {links.map((item) => (
            <MenuItem
              key={item.href}
              active={item.href.includes(segment)}
              handler={setRect}
              label={item.label}
              href={item.href}
            />
          ))}
        </div>
      </div>
      <div style={{ height: scrolled ? ref.current?.getBoundingClientRect().height : 0 }} />
    </>
  );
}

function MenuItem({
  label,
  href,
  handler,
  active,
}: {
  label: string;
  href: string;
  handler: (n: DOMRect | undefined) => void;
  active?: boolean;
}) {
  const { classes, cx } = useStyles();

  return (
    <Link href={href}>
      <a
        className={cx(classes.item, { [classes.active]: active })}
        onMouseOver={(e: React.MouseEvent) => handler(e.currentTarget.getBoundingClientRect())}
        onMouseOut={(e: React.MouseEvent) => handler(undefined)}
      >
        {label}
      </a>
    </Link>
  );
}
