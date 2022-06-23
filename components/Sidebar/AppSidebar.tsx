import Link from 'next/link';
import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  horizontal: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },

  items: {
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
    // paddingLeft: 15,
    paddingRight: 20,
    marginTop: -8,
  },

  hAnchor: {
    display: 'flex',
    gap: 6,
    alignItems: 'center',
    fontSize: 13.45,
    color: '#567',
    textDecoration: 'none',
    textTransform: 'uppercase',
  },

  anchor: {
    display: 'flex',
    gap: 8,
    alignItems: 'center',
    fontSize: 13.45,
    padding: 10,
    color: '#567',
    textDecoration: 'none',
    textTransform: 'uppercase',
  },
}));

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

export default function AppSidebar({ projectId }: { projectId?: string }) {
  const { classes } = useStyles();

  const links = projectId ? projectLinks : defaultLinks;

  return (
    <div className={classes.items}>
      {links.map((item) => (
        <Item key={item.href} label={item.label} href={item.href} />
      ))}
    </div>
  );
}

function SampleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      stroke="#789"
      strokeWidth="1"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <rect x="4" y="4" width="16" height="16" rx="1"></rect>
      <line x1="4" y1="8" x2="20" y2="8"></line>
      <line x1="8" y1="4" x2="8" y2="8"></line>
    </svg>
  );
}

function Item({ label, href }: { label: string; href: string }) {
  const { classes } = useStyles();
  return (
    <Link href={href}>
      <a className={classes.anchor}>
        <SampleIcon />
        <span>{label}</span>
      </a>
    </Link>
  );
}
