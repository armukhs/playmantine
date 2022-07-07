import { Button, Card, Checkbox, Grid, Stack, Tabs, Text } from '@mantine/core';
import Layout, { PageDefinition } from '../../../components/yellow/Layout';
import PTabs from '../../../components/yellow/PTabs';
import { elementStyles } from '../../../components/yellow/Element.styles';
import PBox from '../../../components/PBox/PBox';
import Datarow from '../../../components/yellow/Datarow';
import { useState } from 'react';
import { useForm } from '@mantine/form';

const pageDef: PageDefinition = {
  type: 'project',
  projectType: 'Recruitment',
  channel: 'seleksi',
  channelTitle: 'Tes Seleksi',
};

export default function ProjectPage() {
  const { classes, cx } = elementStyles();

  const [editing, setEditing] = useState(false);
  const [editData, setEditData] = useState(false);
  const [editSlug, setEditSlug] = useState(false);
  const [round, setRound] = useState(false);
  const [contrast, setContrast] = useState(false);

  const form = useForm({
    initialValues: {
      gunung: 'Gunung Rinjani',
      danau: 'Danau Singkarak Perjuangan',
      slug: 'abcde',
      href: 'https://recruit.id/abcde',
    },
  });
  return (
    <Layout pdef={pageDef}>
      <PTabs>
        <Tabs.Tab label="Tanggal">
          <div className={classes.box} style={{ padding: '10px 15px 18px' }}>
            <div>
              <strong>Rust for JavaScript Developers</strong>
              <br /> is a new course that builds on your familiarity with JavaScript to teach you
              Rust. It covers language fundamentals, popular patterns in Rust and the package
              ecosystem.
            </div>
            <div style={{ marginTop: 30 }}>
              <Button size="xs" mr={12} className={classes.btnPrimary}>
                Enter submission
              </Button>
              <Button size="sm" mr={12} className={classes.btnSecondary}>
                Cancel
              </Button>
            </div>
          </div>
        </Tabs.Tab>
        <Tabs.Tab label="Data Masuk">
          <Card withBorder radius={0} px={15} py={10}>
            <Text size="sm" style={{ lineHeight: 1.5 }}>
              With Fjord Tours you can explore more of the magical fjord landscapes with tours and
              activities on and around the fjords of Norway
            </Text>
          </Card>
        </Tabs.Tab>
        <Tabs.Tab label="Seleksi">
          <PBox
            id="pbox1"
            title="Tanggal"
            withShadow={editing}
            control="Edit"
            controlCb={setEditing}
            contrast={contrast}
            round={round}
          >
            <Stack spacing={10}>
              <Datarow
                label="Tanggal mulai"
                bind={[form, 'gunung']}
                compactAt={480}
                readOnly={!editing}
                autoFocus
              />
              <Datarow
                label="Tanggal selesai"
                bind={[form, 'danau']}
                compactAt={480}
                readOnly={!editing}
              />
            </Stack>
          </PBox>
          <br />
          <PBox
            id="pbox2"
            title="Form Data"
            withShadow={editData}
            control="Edit"
            controlCb={setEditData}
            contrast={contrast}
            round={round}
          >
            <div style={{ display: 'flex', gap: 20, marginBottom: 20 }}>
              <Checkbox disabled label="Nama Lengkap" color="dark" checked />
              <Checkbox disabled label="Email" color="dark" checked />
              <Checkbox disabled label="Jenis Kelamin" color="dark" checked />
            </div>
            <Grid gutter={15}>
              <Grid.Col span={6}>
                <Checkbox label="HP / Telepon" color="dark" />
              </Grid.Col>
              <Grid.Col span={6}>
                <Checkbox label="Asal Perguruan" color="dark" />
              </Grid.Col>
              <Grid.Col span={6}>
                <Checkbox label="Kota Asal" color="dark" />
              </Grid.Col>
              <Grid.Col span={6}>
                <Checkbox label="Kota Asal" color="dark" />
              </Grid.Col>
              <Grid.Col span={6}>
                <Checkbox label="Kota Asal" color="dark" />
              </Grid.Col>
              <Grid.Col span={6}>
                <Checkbox label="Kota Asal" color="dark" />
              </Grid.Col>
              <Grid.Col span={6}>
                <Checkbox label="Kota Asal" color="dark" />
              </Grid.Col>
            </Grid>
          </PBox>
          <br />
          <PBox
            id="pbox3"
            title="Web App"
            withShadow={editSlug}
            control="Edit"
            controlCb={setEditSlug}
            contrast={contrast}
            round={round}
          >
            <Stack spacing={10}>
              <Datarow label="Slug" bind={[form, 'slug']} compactAt={480} readOnly={!editSlug} />
              <Datarow label="Link / URL" bind={[form, 'href']} compactAt={480} readOnly />
            </Stack>
          </PBox>
        </Tabs.Tab>
      </PTabs>
    </Layout>
  );
}
