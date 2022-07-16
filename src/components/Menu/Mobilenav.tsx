import { createStyles, Menu } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';
import { NextLink } from '@mantine/next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { LinkProps } from './Menu';

export default function Mobilenav({ links }: { links: LinkProps[] }) {
  const { classes, cx } = useStyles();
  const { ref, width } = useElementSize();
  const [navRights, setNavRights] = useState<number[]>([]);
  const [shadowLinks, setShadowLinks] = useState(links);

  useEffect(() => {
    const array: number[] = [];
    document.querySelectorAll('#navwrap a').forEach((el, index) => {
      array.push(Math.round(el.getBoundingClientRect().right));
    });
    setNavRights(array);
    return () => {};
  }, []);

  useEffect(() => {
    const array: { href: string; label: string; hidden: boolean }[] = [];
    navRights.forEach((value, index) => {
      array.push({
        ...links[index],
        hidden: width < navRights[index] + 16,
      });
    });
    setShadowLinks(array);

    return () => {};
  }, [width, navRights, setShadowLinks]);

  return (
    <div ref={ref} id="mobilenav">
      <div className={classes.wrap}>
        <div id="navwrap" className={classes.flex}>
          {links.map((link, index) => (
            <LinkItem key={link.href} link={link} index={index} width={width} widths={navRights} />
          ))}
        </div>
        {width > 0 && navRights.length > 0 && width < navRights[navRights.length - 1] + 10 && (
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
  const { classes, cx } = useStyles();
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

const useStyles = createStyles((theme) => ({
  wrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    marginLeft: -12,
    overflow: 'hidden',
  },

  flex: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 13.25,
    fontWeight: 500,
  },

  item: {
    position: 'relative',
    display: 'inline-block',
    padding: '0 12px',
    fontSize: 13.5,
    fontWeight: 500,
    lineHeight: '50px',
    color: theme.colors.gray[8],
    textDecoration: 'none',
    cursor: 'pointer',

    ':hover': {
      color: theme.colors.violet[6],
    },

    ':before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      height: 0,
      left: 12,
      right: 12,
      bottom: 0,
      borderBottomWidth: 3,
      borderBottomStyle: 'solid',
      borderBottomColor: 'transparent',
    },
  },

  active: {
    ':before': {
      borderBottomColor: '#345',
    },
    ':hover': {
      color: theme.colors.gray[8],
    },
  },

  hidden: { display: 'none' },
}));
