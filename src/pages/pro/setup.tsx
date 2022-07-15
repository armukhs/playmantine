import { useElementSize, useMediaQuery, useWindowScroll } from '@mantine/hooks';
import ActionFrameTest from 'components/Frame/ActionFrameTest';
import Layout from 'components/Layout/Layout';
import { RecruitmentNav, SidebarRecuitment } from 'components/Topnav/RecruitmentNav';
import Hero from 'components/Hero/Hero';
import PTabs from 'components/Tabs/PTabs';
import { Tabs } from '@mantine/core';

export default function Index() {
  const match = useMediaQuery('(min-width: 768px)');
  const { ref, width } = useElementSize();
  const [scroll, scrollTo] = useWindowScroll();
  const hero = <Hero label="Recruitment" title="Setup" />;
  const topnav = <RecruitmentNav fixed={!match && scroll.y > 70} scroll={scroll.y} />;
  const sidebar = <SidebarRecuitment />;
  return (
    <Layout topnav={topnav} sidebar={sidebar} scroll={scroll.y} match={match} hero={hero}>
      <div ref={ref}>
        <PTabs>
          <Tabs.Tab label="Setting">
            <ActionFrameTest compact={width > 0 && width < 500} />
          </Tabs.Tab>
          <Tabs.Tab label="Monitoring">
            <ActionFrameTest compact={false} />
          </Tabs.Tab>
          <Tabs.Tab label="Email">
            <ActionFrameTest compact={false} />
          </Tabs.Tab>
          <Tabs.Tab label="Screening">
            <ActionFrameTest compact={false} />
          </Tabs.Tab>
        </PTabs>
      </div>
    </Layout>
  );
}
