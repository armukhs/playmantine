import { Box, Paper, Title } from '@mantine/core';
import { ReactNode } from 'react';
import Layout from '../../components/Layout/Layout';

const title = 'Clients';

export default function TenantPage() {
  return (
    <Layout>
      <Title mt={30} sx={{ fontSize: 32 }}>
        {title}
      </Title>
      <p style={{ color: '#789' }}>Hanya untuk Partner Account</p>
      <br />
      <Paper withBorder sx={{ borderColor: '#ddd' }}>
        <ClientRow val="This page includes frequently asked questions from ." />
        <ClientRow val="Axiom is log management and analytics solution that reduces the" />
        <ClientRow val="With Axiom, organizations no longer need to choose between ." />
        <ClientRow val="Organizations use Axiom for continuous monitoring & ." />
        <ClientRow val="AWS S3, Azure, Google Cloud, DigitalOcean, Minio, and Ceph are all supported object stores" />
      </Paper>
    </Layout>
  );
}

function ClientRow({ val }: { val: string }) {
  return (
    <Box
      px={15}
      sx={{
        display: 'flex',
        alignItems: 'left',
        flexFlow: 'column',
        borderBottom: '1px solid #ddd',
        overflow: 'hidden',
        ':last-child': {
          borderBottom: '0 none',
        },
        '@media (min-width: 600px)': {
          flexFlow: 'row',
          alignItems: 'center',
        },
      }}
    >
      <Box py={15} sx={{ flexGrow: 1 }}>
        <div style={{ fontWeight: 600 }}>PT Nama Klien</div>
        <div style={{ color: '#666', fontSize: 13 }}>{val}</div>
      </Box>
      {/* <Box
        sx={{
          flex: 1,
          paddingTop: 10,
          paddingBottom: 10,
          borderTop: '1px dotted #ddd',
          color: '#666',
          '@media (min-width: 768px)': {
            flex: '0 0 10%',
            marginLeft: 15,
            paddingTop: 15,
            paddingBottom: 15,
            borderTop: '0 none',
          },
        }}
      >
        Kolom 2
      </Box> */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          paddingTop: 10,
          paddingBottom: 15,
          borderTop: '1px dotted #ddd',
          '@media (min-width: 600px)': {
            flex: '0 0 20%',
            justifyContent: 'end',
            marginLeft: 15,
            paddingTop: 15,
            borderTop: '0 none',
          },
        }}
      >
        Kolom 3
      </Box>
    </Box>
  );
}