import Layout, { PageDefinition } from '../../components/yellow/Layout';

const pageDef: PageDefinition = {
  type: 'project',
  projectType: 'Recruitment',
  channel: 'overview',
  channelTitle: 'Overview',
};

export default function PartnerPage() {
  return (
    <Layout pdef={pageDef}>
      <div style={{ minHeight: '100vh' }}>LOLO</div>
    </Layout>
  );
}
