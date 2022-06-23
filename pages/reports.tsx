import Banner from '../components/Banner/Banner';
import Layout from '../components/Layout/Layout';

export default function ProjectPage() {
  const banner = <Banner title="Reports" />;
  return (
    <Layout projectId="233" banner={banner}>
      LOLP
    </Layout>
  );
}
