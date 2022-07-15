import { useMediaQuery, useWindowScroll } from '@mantine/hooks';
import ActionFrameTest from 'components/Frame/ActionFrameTest';
import Layout from 'components/Layout/Layout';
import { RecruitmentNav, SidebarRecuitment } from 'components/Topnav/RecruitmentNav';
import Hero from 'components/Hero/Hero';
import { Group, Text, Title } from '@mantine/core';
import SimpleFrame from 'components/Frame/SimpleFrame';
import Frame from 'components/Frame/Frame';
import Block from 'components/Block/Block';

export default function Index() {
  const match = useMediaQuery('(min-width: 768px)');
  const [scroll, scrollTo] = useWindowScroll();
  const hero = <Hero label="Recruitment" title="Overview" />;
  const topnav = <RecruitmentNav fixed={!match && scroll.y > 70} scroll={scroll.y} />;
  const sidebar = <SidebarRecuitment />;
  return (
    <Layout topnav={topnav} sidebar={sidebar} scroll={scroll.y} match={match} hero={hero}>
      <Title order={3} mb={10}>
        Halaman tekstual
      </Title>

      <div
        style={{
          marginTop: 20,
          marginBottom: 20,
          display: 'flex',
          gap: 20,
          justifyContent: 'flex-start',
          alignItems: 'stretch',
        }}
      >
        <Block title="Block 2" shadow>
          Generated react app rehydrate with generated markup at that time it show empty space
          between jsx tags.
        </Block>
        <Block title="Block 3" shadow>
          This problem is occurred when you have tried to rehydrate you react app. Generated react
          app rehydrate with generated markup at that time it show empty space between jsx tags.
        </Block>
      </div>

      <Text mb={15}>
        Thank you! I wasted 2 days with this problem, and none of the solutions were good.
      </Text>
      <Text mb={25}>
        This problem is occurred when you have tried to rehydrate you react app. Generated react app
        rehydrate with generated markup at that time it show empty space between jsx tags.
      </Text>
      <ActionFrameTest compact={false} />
    </Layout>
  );
}
