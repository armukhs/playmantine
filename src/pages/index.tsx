import { useForm } from '@mantine/form';
import Layout, { PageSpec } from 'components/Layout/Layout';
import SimpleFrame from 'components/Frame/SimpleFrame';
import Frame from 'components/Frame/Frame';
import { Box, Text } from '@mantine/core';
import Block from 'components/Block/Block';
import { RecruitmentMenu } from 'components/Menu/Menu';

const pageSpec: PageSpec = {
  menu: RecruitmentMenu,
  type: 'Recruitment',
  title: 'Overview',
};

export default function Index() {
  const form = useForm({
    initialValues: {
      nama: 'Joko',
      alamat: '',
    },
  });
  return (
    <Layout spec={pageSpec}>
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
