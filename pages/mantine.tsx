import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Button, Center } from '@mantine/core';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <Center py={20}>
        <Link href="/" passHref>
          <Button component="a">Home</Button>
        </Link>
      </Center>
    </>
  );
}
