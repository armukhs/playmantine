import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import {
  Box,
  Button,
  Center,
  Container,
  Group,
  Header,
  Skeleton,
  Space,
  Text,
} from '@mantine/core';
import Link from 'next/link';
import { useWindowScroll } from '@mantine/hooks';
import Layout from '../components/Layout/Layout';

export default function HomePage() {
  return (
    <div>
      <Center px={20} pt={0}>
        <p>
          This starter Next.js project includes a minimal setup for server side rendering, if you
          want to learn more on Mantine + Next.js integration follow this guide. To get started edit
          index.tsx file.
        </p>
        <Text size="lg" weight={300}>
          Use Skeleton to create a placeholder for loading content. Component support following
          props: This starter Next.js project includes a minimal setup for server side rendering, if
          you want to learn more on Mantine + Next.js integration follow this guide. To get started
          edit index.tsx file.
        </Text>
        <Text size="sm">
          This starter Next.js project includes a minimal setup for server side rendering, if you
          want to learn more on Mantine + Next.js integration follow this guide. To get started edit
          index.tsx file.
        </Text>
      </Center>
      <Container size={1048}>
        <Text>
          This starter Next.js project includes a minimal setup for server side rendering, if you
          want to learn more on Mantine + Next.js integration follow this guide. To get started edit
          index.tsx file.
        </Text>
      </Container>
      <Welcome />
      <Welcome />
      <Welcome />
      <Welcome />
      <ColorSchemeToggle />
      <Center py={20}>
        <Link href="/mantine" passHref>
          <Button component="a">Mantine</Button>
        </Link>
      </Center>
    </div>
  );
}
