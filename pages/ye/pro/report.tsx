import Layout, { PageDefinition } from '../../../components/yellow/Layout';

const pageDef: PageDefinition = {
  type: 'project',
  projectType: 'Recruitment',
  channel: 'report',
  channelTitle: 'Laporan',
};

export default function ProjectPage() {
  return (
    <Layout pdef={pageDef}>
      <div style={{ minHeight: '100vh' }}>LOLO</div>
    </Layout>
  );
}
