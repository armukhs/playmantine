import { Button } from '@mantine/core';
// import { PlusIcon } from '@modulz/radix-icons';
import { Plus } from 'tabler-icons-react';
import Link from 'next/link';
import Banner from '../components/Banner/Banner';
import Layout from '../components/Layout/Layout';

export default function Vertical() {
  const banner = (
    <Banner title="Projects">
      <Link href="/new" passHref>
        <Button
          component="a"
          leftIcon={<Plus strokeWidth={1.5} />}
          size="md"
          variant="filled"
          color="dark"
          radius={3}
          style={{ fontWeight: 400, paddingLeft: 12 }}
        >
          New Project
        </Button>
      </Link>
    </Banner>
  );

  return (
    <Layout banner={banner}>
      <p style={{ marginTop: 0 }}>List of projects</p>
      <Link href="/overview">
        <a>Sample Project</a>
      </Link>
    </Layout>
  );
}
