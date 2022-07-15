import { ReactNode } from 'react';
import { styles } from './Layout.styles';
export default function Main({
  mt,
  mb,
  p,
  children,
}: {
  mt?: number | string;
  mb?: number | string;
  p?: number | string;
  children: ReactNode;
}) {
  const { classes } = styles();
  return (
    <div
      className={classes.main}
      style={{ marginTop: mt ? mt : 0, marginBottom: mb ? mb : 0, padding: p ? p : 0 }}
    >
      {children}
    </div>
  );
}
