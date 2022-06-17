import { Box, Button, Container, Group, Header, Skeleton, Text } from '@mantine/core';
import Link from 'next/link';
import { DEFAULT_WIDTH } from '../Layout/Layout';

export default function PageHeader() {
  return (
    <Header height={58} sx={{ borderWidth: 0 }}>
      <Container size={DEFAULT_WIDTH} px={20}>
        <Box
          pt={12}
          pb={6}
          style={{ backgroundColor: '#ffffff', display: 'flex', alignItems: 'center' }}
        >
          <Group spacing={20}>
            <Text sx={{ fontSize: 20, letterSpacing: 2, fontWeight: 700 }}>ACES</Text>
            <Link href="/">
              <a>
                <Skeleton
                  height={40}
                  circle
                  animate={false}
                  sx={(theme) => ({ backgroundColor: 'red' })}
                />
              </a>
            </Link>
            <Link href="/ui/projects">
              <a style={{ fontSize: 15, color: 'black', textDecoration: 'none' }}>
                <Text weight={500}>PT Mubarak Samadikan</Text>
              </a>
            </Link>
          </Group>
          <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'end' }}>
            <Button size="xs">Log</Button>
          </div>
        </Box>
      </Container>
    </Header>
  );
}
