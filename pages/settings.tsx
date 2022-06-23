import Banner from '../components/Banner/Banner';
import Layout from '../components/Layout/Layout';

export default function Vertical() {
  const banner = <Banner title="Aces Account Settings" />;
  return <Layout banner={banner}>PROJECTS</Layout>;
}
