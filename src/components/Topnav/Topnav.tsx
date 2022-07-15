import { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu } from '@mantine/core';
import { NextLink } from '@mantine/next';
import { useElementSize } from '@mantine/hooks';
import { useRouter } from 'next/router';
import { navStyles } from './Topnav.styles';

export interface AcesLink {
  href: string;
  label: string;
  hidden: boolean;
  icon?: ReactNode;
}

export default function Topnav({
  links,
  fixed,
  scroll,
}: {
  links: AcesLink[];
  fixed: boolean;
  scroll: number;
}) {
  const { classes, cx } = navStyles({ fixed, scroll });
  const { ref, width } = useElementSize();
  const [navWidths, setNavWidths] = useState<number[]>([]);
  const [shadowLinks, setShadowLinks] = useState(links);

  useEffect(() => {
    const array: number[] = [];
    document.querySelectorAll('#topnav a').forEach((el, index) => {
      array.push(el.getBoundingClientRect().right - 0);
    });
    setNavWidths(array);
    return () => {};
  }, []);

  useEffect(() => {
    const array: { href: string; label: string; hidden: boolean }[] = [];
    navWidths.forEach((value, index) => {
      array.push({
        ...links[index],
        hidden: width < navWidths[index] + 10,
      });
    });
    setShadowLinks(array);

    return () => {};
  }, [width, navWidths, setShadowLinks]);

  return (
    <>
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          right: 0,
          color: 'white',
          backgroundColor: 'black',
        }}
      >
        W {width} NW5 {navWidths[5]}
      </div>
      <div id="topnav" className={classes.root}>
        <div className={classes.wrap}>
          <div
            ref={ref}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              position: 'relative',
              marginLeft: -12,
              overflow: 'hidden',
            }}
          >
            <div className={classes.flex}>
              {links.map((link, index) => (
                <LinkItem
                  key={link.href}
                  link={link}
                  index={index}
                  width={width}
                  widths={navWidths}
                />
              ))}
            </div>
            {width > 0 && navWidths.length > 0 && width < navWidths[navWidths.length - 1] + 10 && (
              <Menu>
                {shadowLinks
                  .filter((item) => item.hidden)
                  .map((link) => (
                    <Menu.Item key={link.href} component={NextLink} href={link.href}>
                      {link.label}
                    </Menu.Item>
                  ))}
              </Menu>
            )}
          </div>
        </div>
      </div>
      <div style={{ height: fixed ? ref.current?.getBoundingClientRect().height : 0 }} />
    </>
  );
}

function LinkItem({
  link,
  index,
  width,
  widths,
}: {
  link: { href: string; label: string };
  index: number;
  width: number;
  widths: number[];
}) {
  const { pathname } = useRouter();
  const { classes, cx } = navStyles({});
  return (
    <Link href={link.href}>
      <a
        hidden-at={widths[index]}
        className={cx(classes.item, {
          [classes.active]: pathname == link.href,
          [classes.hidden]: width < widths[index] + 10,
        })}
      >
        <span>{link.label}</span>
      </a>
    </Link>
  );
}
