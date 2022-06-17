import { Text } from '@mantine/core';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    position: 'relative',
    marginLeft: -12,
  },
  shade: {
    position: 'absolute',
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    top: 9,
    width: 0,
    height: 32,
    transitionDuration: '0ms',
    transitionProperty: 'width, transform, opacity',
    transitionTimingFunction: 'ease',
  },
  item: {
    position: 'relative',
    display: 'inline-block',
    padding: 12,
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 15,
    lineHeight: 1.33334,
    color: 'gray',
    textDecoration: 'none',
    cursor: 'pointer',

    ':hover': {
      color: '#333',
    },

    ':before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      height: 0,
      left: 12,
      right: 12,
      bottom: 0,
      borderBottomWidth: 4,
      borderBottomStyle: 'solid',
      borderBottomColor: 'transparent',
    },
  },

  active: {
    ':before': {
      borderBottomColor: '#345',
    },
  },
}));

export default function AnimatedMenu() {
  const ref = useRef<HTMLDivElement>(null);
  const shade = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [enter, setEnter] = useState(false);
  const [rect, setRect] = useState<DOMRect | undefined>(undefined);

  const resizeHandler = (event: Event) => {
    const el = ref.current;
    if (el) setWidth(el.getBoundingClientRect().left);
  };

  useEffect(() => {
    const el = ref.current;
    if (el) setWidth(el.getBoundingClientRect().left);
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  useEffect(() => {
    const elm = shade.current;
    if (!elm) return;
    if (rect) {
      elm.style.width = rect.width + 'px';
      elm.style.transform = `translateX(${rect.left - width}px)`;
      elm.style.opacity = '1';
      if (!enter) {
        elm.style.transitionDuration = `0ms`;
        setEnter(true);
      } else {
        elm.style.transitionDuration = '200ms';
      }
    } else {
      elm.style.opacity = '0';
      elm.style.transitionDuration = `0ms`;
    }
  }, [rect]);

  const { classes } = useStyles();

  return (
    <>
      <div ref={ref} className={classes.wrapper} onMouseLeave={(e) => setEnter(false)}>
        <div ref={shade} className={classes.shade}></div>
        <MenuItem cb={setRect} label="Projects" href="/project" />
        <MenuItem cb={setRect} label="Clients" href="/project" active />
        <MenuItem cb={setRect} label="Team" href="/project" />
        <MenuItem cb={setRect} label="Settings" href="/project" />
      </div>
      {/* <br /> */}
      {/* Width: {width} / Left {rect ? rect.width : '--'} / Enter: {enter ? 'Y' : 'N'} */}
    </>
  );
}

function MenuItem({
  label,
  href,
  cb,
  active,
}: {
  label: string;
  href: string;
  cb: (n: DOMRect | undefined) => void;
  active?: boolean;
}) {
  const { classes, cx } = useStyles();

  return (
    <Link href={href}>
      <Text
        component="a"
        className={cx(classes.item, { [classes.active]: active != undefined })}
        onMouseOver={(e: React.MouseEvent) => cb(e.currentTarget.getBoundingClientRect())}
        onMouseOut={(e: React.MouseEvent) => cb(undefined)}
      >
        {label}
      </Text>
    </Link>
  );
}
