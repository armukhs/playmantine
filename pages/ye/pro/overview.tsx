import Layout, { PageDefinition } from '../../../components/yellow/Layout';

const pageDef: PageDefinition = {
  type: 'project',
  projectType: 'Recruitment',
  channel: 'interview',
  channelTitle: 'Wawancara',
};

export default function ProjectPage() {
  return <Layout pdef={pageDef}>{/* <PBox></PBox> */}</Layout>;
}
