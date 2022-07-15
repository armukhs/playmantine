import { ReactNode } from 'react';
import { styles } from './Layout.styles';
export default function Wrap({ children }: { children: ReactNode }) {
  const { classes } = styles();
  return <div className={classes.wrap}>{children}</div>;
}
