import Layout from 'components/Layout/Layout';
import { RecruitmentMenu } from 'components/Menu/Menu';

const pageSpec = {
  menu: RecruitmentMenu,
  type: 'Recruitment',
  title: 'Recruitment',
};

export default function Index() {
  return (
    <>
      <Layout spec={pageSpec}>
        <div>BODY</div>
      </Layout>
    </>
  );
}
