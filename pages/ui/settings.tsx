import { Title } from '@mantine/core';
import Layout from '../../components/Layout/Layout';

const title = 'Corporate Account Settings';

export default function TenantPage() {
  return (
    <Layout>
      <Title mt={30} sx={{ fontSize: 32, fontWeight: 500 }}>
        {title}
      </Title>
    </Layout>
  );
}
