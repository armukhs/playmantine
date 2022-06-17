import { Box, Card, Grid, Paper, Space, Text, Title } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout/Layout';

const title = 'Projects';

export default function TenantPage() {
  const { pathname } = useRouter();
  const segment = pathname.split('/').pop();

  return (
    <Layout shade>
      <Title mt={30} mb={50} sx={{ fontSize: 32 }}>
        {title}
      </Title>

      <Link href="/ui/overview">Project Page</Link>

      <Space h={30} />

      <Grid gutter={24}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Grid>

      {/* <pre>{JSON.stringify(segment, null, 2)}</pre> */}
    </Layout>
  );
}

function ProjectCard() {
  return (
    <Grid.Col sm={6}>
      <Paper
        p={15}
        // withBorder
        shadow="0 2px 5px rgba(100,100,100,.2)"
        style={{ height: 250, borderColor: '#ddd' }}
      >
        Lokasn
      </Paper>
    </Grid.Col>
  );
}
