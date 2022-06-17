import { Box, Container } from '@mantine/core';
import { ReactNode, useEffect, useRef } from 'react';
import ProjectNav from '../Navigation/ProjectNav';
import SiteNav from '../Navigation/SiteNav';
import PageHeader from '../PageHeader/PageHeader';

export const DEFAULT_WIDTH = 1000;

export default function Layout({
  projectId = undefined,
  shade = false,
  children,
}: {
  projectId?: string;
  shade?: boolean;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const navigation = projectId ? <ProjectNav /> : <SiteNav />;

  useEffect(() => {
    const elm = ref.current;
    if (elm) {
      elm.style.minHeight = `calc(100vh - 111px)`;
    }
    return () => {};
  });

  return (
    <>
      <PageHeader />
      {navigation}
      <div style={{ backgroundColor: shade ? '#f8f8f8' : 'white' }}>
        <Container
          ref={ref}
          size={DEFAULT_WIDTH}
          px={20}
          pt={10}
          style={{
            minHeight: 2000, // make excessive
            paddingBottom: 100,
          }}
        >
          {children}
        </Container>
      </div>
      <Box
        sx={(theme) => ({
          borderColor: theme.colors.gray[2],
          borderStyle: 'solid',
          borderWidth: 0,
          borderTopWidth: 1,
          backgroundColor: '#f0f0f0',
        })}
      >
        <Container size={DEFAULT_WIDTH} pt={30} pb={50}>
          Footer
        </Container>
      </Box>
    </>
  );
}

// export function
