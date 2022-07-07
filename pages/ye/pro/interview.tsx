import Layout, { PageDefinition } from '../../../components/yellow/Layout';
import { elementStyles } from '../../../components/yellow/Element.styles';

const pageDef: PageDefinition = {
  type: 'project',
  projectType: 'Recruitment',
  channel: 'interview',
  channelTitle: 'Wawancara',
};

export default function ProjectPage() {
  const { classes, cx } = elementStyles();
  return (
    <Layout pdef={pageDef}>
      <div className={classes.box} style={{ padding: '10px 15px 18px' }}>
        LOKO
      </div>
    </Layout>
  );
}
