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
  useMantineTheme,
} from '@mantine/core';
import Link from 'next/link';
import { useWindowScroll } from '@mantine/hooks';
import Layout from '../components/Layout/Layout';

export default function HomePage() {
  const theme = useMantineTheme();
  return (
    <div>
      <Container size={1000}>
        <Link href="/yellow">
          <a>Yellow</a>
        </Link>
        <p>
          <strong>Normal P - 15</strong>
          {` `}
          This starter Next.js project includes a minimal setup for server side rendering, if you
          want to learn more on Mantine + Next.js integration follow this guide. To get started edit
          index.tsx file.
        </p>
        <Text size="xs">
          <strong>Text XS - 12</strong>
          Use Skeleton to create a placeholder for loading content. Component support following
          props: This starter Next.js project includes a minimal setup for server side rendering, if
          you want to learn more on Mantine + Next.js integration follow this guide. To get started
          edit index.tsx file.
        </Text>
        <Text size="sm">
          <strong>Text SM - 13.75</strong>
          {` `}
          Use Skeleton to create a placeholder for loading content. Component support following
          props: This starter Next.js project includes a minimal setup for server side rendering, if
          you want to learn more on Mantine + Next.js integration follow this guide. To get started
          edit index.tsx file.
        </Text>
        <Text size="md">
          <strong>Text MD - 15</strong>
          {` `}
          Use Skeleton to create a placeholder for loading content. Component support following
          props: This starter Next.js project includes a minimal setup for server side rendering, if
          you want to learn more on Mantine + Next.js integration follow this guide. To get started
          edit index.tsx file.
        </Text>
        <Text size="lg">
          <strong>Text LG - 17.5</strong>
          {` `}
          Use Skeleton to create a placeholder for loading content. Component support following
          props: This starter Next.js project includes a minimal setup for server side rendering, if
          you want to learn more on Mantine + Next.js integration follow this guide. To get started
          edit index.tsx file.
        </Text>
        <Text size="xl">
          <strong>Text XL - 20</strong>
          {` `}
          Use Skeleton to create a placeholder for loading content. Component support following
          props: This starter Next.js project includes a minimal setup for server side rendering, if
          you want to learn more on Mantine + Next.js integration follow this guide. To get started
          edit index.tsx file.
        </Text>
        <Space h={40} />
        <Button
          styles={{
            root: {
              color: theme.colors.dark,
              border: `3px solid ${theme.colors.dark[5]}`,
              backgroundColor: theme.colors.yellow[3],
              ':hover': {
                backgroundColor: theme.colors.yellow[5],
                // borderRadius: 9,
              },
            },
          }}
          radius={0}
          size="lg"
          ml={10}
        >
          Save the birds
        </Button>
        <Button
          styles={{
            root: {
              color: theme.colors.dark,
              border: `3px solid ${theme.colors.dark[5]}`,
              backgroundColor: 'white',
              ':hover': {
                backgroundColor: theme.colors.yellow[1],
                // borderRadius: 9,
              },
            },
          }}
          radius={0}
          size="lg"
          ml={10}
        >
          Save the birds
        </Button>
        <Button
          styles={{
            root: {
              color: theme.colors.dark,
              border: `2px solid ${theme.colors.dark[5]}`,
              backgroundColor: theme.colors.yellow[3],
              ':hover': {
                backgroundColor: theme.colors.yellow[5],
                // borderRadius: 9,
              },
            },
          }}
          radius={0}
          size="md"
          ml={10}
        >
          Save the birds
        </Button>
        <Button
          styles={{
            root: {
              color: theme.colors.dark,
              border: `2px solid ${theme.colors.dark[5]}`,
              backgroundColor: 'white',
              ':hover': {
                backgroundColor: theme.colors.yellow[1],
                // borderRadius: 9,
              },
            },
          }}
          radius={0}
          size="md"
          ml={10}
        >
          Save the birds
        </Button>
        <Button
          styles={{
            root: {
              color: theme.colors.dark,
              // border: `2px solid ${theme.colors.dark[5]}`,
              backgroundColor: theme.colors.yellow[3],
              ':hover': {
                backgroundColor: theme.colors.yellow[1],
                // borderRadius: 9,
              },
            },
          }}
          radius={0}
          size="md"
          ml={10}
        >
          Save the birds
        </Button>
        <Box
          my={20}
          sx={(theme) => ({
            backgroundColor: theme.colors.yellow[5],
            minHeight: 200,
          })}
        ></Box>
      </Container>

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
