import { Button } from '@mantine/core';
import { MouseEventHandler } from 'react';
import { elementStyles } from './Element.styles';

export default function PButton({
  label,
  size = 'sm',
  secondary,
  onClick,
}: {
  label: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  secondary?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}) {
  const { classes } = elementStyles();
  return (
    <Button
      size={size}
      mr={12}
      className={secondary ? classes.btnSecondary : classes.btnPrimary}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}
