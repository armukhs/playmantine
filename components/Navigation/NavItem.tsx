import { Text } from '@mantine/core';
import Link from 'next/link';
import { useStyles } from './NavStyles.styles';

export default function NavItem({
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
      <Text
        component="a"
        className={cx(classes.item, { [classes.active]: active })}
        onMouseOver={(e: React.MouseEvent) => handler(e.currentTarget.getBoundingClientRect())}
        onMouseOut={(e: React.MouseEvent) => handler(undefined)}
      >
        {label}
      </Text>
    </Link>
  );
}
