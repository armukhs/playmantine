import { ReactNode } from 'react';
import { createStyles } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';

const styles = createStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },

  compact: {
    flexFlow: 'column',
    alignItems: 'stretch',
    gap: 2,
  },

  label: {
    fontSize: 12,
    fontWeight: 500,
    textTransform: 'uppercase',
    width: 120,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  labelHidden: { display: 'none' },

  inputWrap: {
    flexGrow: 1,
  },

  inputWrapCompact: {
    borderLeft: `1px solid ${theme.colors.dark[2]}`,
    paddingLeft: 2,
  },

  buttonsWrap: {
    flexGrow: 1,
    display: 'flex',
    gap: 10,
  },

  alignCenter: {
    justifyContent: 'end',
  },
}));

export default function Row({
  label,
  compactAt,
  buttons,
  children,
}: {
  label?: string;
  compactAt?: number;
  buttons?: boolean;
  children: ReactNode;
}) {
  const { classes, cx } = styles();
  const { ref, width } = useElementSize();
  return (
    <div
      ref={ref}
      className={cx(classes.root, {
        [classes.compact]: width && compactAt ? width < compactAt : false,
      })}
    >
      <label
        className={cx(classes.label, {
          [classes.labelHidden]: buttons && width && compactAt ? width < compactAt : false,
        })}
      >
        {label ? `${label}:` : ''}
      </label>
      {buttons && (
        <div
          className={cx(classes.buttonsWrap, {
            [classes.alignCenter]: width && compactAt ? width < compactAt : false,
          })}
        >
          {children}
        </div>
      )}
      {!buttons && (
        <div
          className={cx(classes.inputWrap, {
            [classes.inputWrapCompact]: width && compactAt ? width < compactAt : false,
          })}
        >
          {children}
        </div>
      )}
    </div>
  );
}
