import { useMediaQuery, useWindowScroll } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import Layout from 'components/Layout/Layout';
import { RecruitmentNav, SidebarRecuitment } from 'components/Topnav/RecruitmentNav';
import Hero from 'components/Hero/Hero';
import SimpleFrame from 'components/Frame/SimpleFrame';
import Frame from 'components/Frame/Frame';
import { Box, Text } from '@mantine/core';
import { useState } from 'react';
import Block from 'components/Block/Block';

export default function Index() {
  const match = useMediaQuery('(min-width: 768px)');
  const [scroll, scrollTo] = useWindowScroll();
  const hero = <Hero label="Aces Corporate" title="Projects" />;
  const topnav = <RecruitmentNav fixed={!match && scroll.y > 70} scroll={scroll.y} />;
  const sidebar = <SidebarRecuitment />;

  const [show, setShow] = useState(false);
  const form = useForm({
    initialValues: {
      nama: 'Joko',
      alamat: '',
    },
  });
  return (
    <Layout topnav={topnav} sidebar={sidebar} scroll={scroll.y} match={match} hero={hero}>
      <Box p={15} mb={20}>
        <Text mb={25}>
          This problem is occurred when you have tried to rehydrate you react app. Generated react
          app rehydrate with generated markup at that time it show empty space between jsx tags.
        </Text>
      </Box>

      <Block mb={15} rounded shadow>
        This problem is occurred when you have tried to rehydrate you react app. Generated react app
        rehydrate with generated markup at that time it show empty space between jsx tags.
      </Block>
      <Block
        mb={15}
        title="Block with title"
        description="This problem is occurred when you have tried to rehydrate you react app."
        rounded
      >
        This problem is occurred when you have tried to rehydrate you react app. Generated react app
        rehydrate with generated markup at that time it show empty space between jsx tags.
      </Block>
      <Block mb={15} title="Block as form" shadow form={form} editable>
        This problem is occurred when you have tried to rehydrate you react app. Generated react app
        rehydrate with generated markup at that time it show empty space between jsx tags.
      </Block>

      <SimpleFrame mt={20} p="10px 15px" withShadow>
        SimpleFrame
      </SimpleFrame>

      <Frame mt={20} contrast title="Frame" p="10px 15px" description="Frame description">
        KOLSO
      </Frame>
    </Layout>
  );
}
