import { Button } from '@mantine/core';
import Banner from '../components/Banner/Banner';
import Layout from '../components/Layout/Layout';

export default function Vertical() {
  const banner = <Banner title="Project Overview" />;
  return (
    <Layout projectId="233" banner={banner}>
      LOLP
    </Layout>
  );
}
