import { ReactNode } from 'react';
import { styles } from './Hero.styles';

export default function Hero({ label, title }: { label: string; title: string }) {
  const { classes } = styles();
  return (
    <div className={classes.root}>
      <div className={classes.wrap}>
        <div className={classes.hero}>
          <div className={classes.iconBox}></div>
          <div>
            <div className={classes.label}>{label}</div>
            <div className={classes.title}>{title}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
