import { Anchor, Title } from '@mantine/core';
import Link from 'next/link';
import Layout from '../../components/Layout/Layout';

const title = 'Persona';

export default function ProjectPage() {
  return (
    <Layout projectId="234">
      <Title mt={30} mb={50} sx={{ fontSize: 32 }}>
        {title}
      </Title>
      <Link href="/ui/projects">Projects</Link>
    </Layout>
  );
}
