import { ReactNode } from 'react';
import { useStyles } from './Banner.styles';

export default function Banner({ title, children }: { title: string; children?: ReactNode }) {
  const { classes } = useStyles();
  return (
    <div className={classes.wrap}>
      <h1 className={classes.title}>{title}</h1>
      {children}
    </div>
  );
}
