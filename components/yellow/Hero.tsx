import { Title, useMantineTheme } from '@mantine/core';
import { layoutStyles } from './Layout.styles';

export default function Hero({ type, title }: { type: string; title: string }) {
  const theme = useMantineTheme();
  const { classes, cx } = layoutStyles();
  return (
    <div className={classes.hero}>
      <div className={classes.container}>
        <div className={classes.heroInner}>
          <div className={classes.flex} style={{ gap: 24 }}>
            <div
              style={{
                width: 72,
                height: 72,
                backgroundColor: 'white',
                borderRadius: 7,
              }}
            ></div>
            <div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  //
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                  }}
                >
                  ► {type}
                </span>
              </div>
              <Title
                sx={{
                  color: '',
                  fontSize: 44,
                  lineHeight: 0.8,
                  fontWeight: 800,
                  letterSpacing: -1,
                }}
              >
                {title}
              </Title>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
