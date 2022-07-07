import Link from 'next/link';
import { createStyles } from '@mantine/core';
import { useRouter } from 'next/router';

const styles = createStyles((theme, _params, getRef) => ({
  wrapper: {},

  heading: {
    fontSize: 15,
    fontWeight: 800,
    letterSpacing: -0.5,
    margin: 0,
    // color: theme.colors.gray[8],
  },

  headingText: {
    display: 'block',
    paddingBottom: 6,
    borderBottom: `1px solid ${theme.colors.yellow[5]}`,
  },

  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    borderBottom: `1px solid ${theme.colors.yellow[5]}`,
  },

  listItem: {
    fontSize: 14,
    lineHeight: 2.75,
    ':hover': {},
  },

  anchor: {
    display: 'block',
    color: theme.colors.dark[9],
    fontWeight: 500,
    textDecoration: 'none',
    ':hover': {
      backgroundColor: theme.colors.yellow[3],
      [`& .${getRef('label')}`]: {
        borderLeft: `1px solid ${theme.colors.dark[2]}`,
      },
    },
  },

  active: {
    backgroundColor: theme.colors.gray[1],
    fontWeight: 700,
    [`& .${getRef('label')}`]: {
      borderLeft: `1px solid ${theme.colors.dark[2]}`,
    },
  },

  label: {
    ref: getRef('label'),
    display: 'block',
    paddingLeft: 12,
    paddingRight: 20,
    marginLeft: 10,
    marginRight: 10,
    borderLeft: `1px solid ${theme.colors.yellow[5]}`,
  },
  // wrapper: {},
}));

export default function Sidebar() {
  const { classes, cx } = styles();
  const router = useRouter();
  const links = [
    { href: '/ye/pro', label: 'Overview' },
    { href: '/ye/pro/registrasi', label: 'Pendaftaran' },
    { href: '/ye/pro/seleksi', label: 'Seleksi' },
    { href: '/ye/pro/interview', label: 'Wawancara' },
    { href: '/ye/pro/report', label: 'Laporan' },
    { href: '/ye/pro/billing', label: 'Billing' },
  ];
  return (
    <div className={classes.wrapper}>
      <h3 className={classes.heading}>
        <span className={classes.headingText}>Recruitment Project</span>
      </h3>
      <ul className={classes.list}>
        {links.map((item, index) => (
          <li key={item.label} className={classes.listItem}>
            <Link href={item.href}>
              <a className={cx(classes.anchor, { [classes.active]: router.pathname == item.href })}>
                <span className={classes.label}>{item.label}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
