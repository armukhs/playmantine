import { ReactNode } from 'react';
import Row from './Row';

export default function FormControl({
  compactAt,
  children,
}: {
  compactAt?: number;
  children: ReactNode;
}) {
  return (
    <Row buttons compactAt={compactAt}>
      {children}
    </Row>
  );
}
