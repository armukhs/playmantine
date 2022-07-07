import { Button, Card, Checkbox, Grid, Space, Stack, Tabs, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useEffect, useRef, useState } from 'react';
import PBox from '../../../components/PBox/PBox';
import Datarow from '../../../components/yellow/Datarow';
import Layout, { PageDefinition } from '../../../components/yellow/Layout';
import PTabs from '../../../components/yellow/PTabs';

const pageDef: PageDefinition = {
  type: 'project',
  projectType: 'Recruitment',
  channel: 'registrasi',
  channelTitle: 'Registrasi',
};

export default function ProjectPage() {
  const form = useForm({
    initialValues: {
      gunung: 'Gunung Rinjani',
      danau: 'Danau Singkarak Perjuangan',
      slug: 'abcde',
      href: 'https://recruit.id/abcde',
    },
  });
  const [editing, setEditing] = useState(false);
  const [editData, setEditData] = useState(false);
  const [editSlug, setEditSlug] = useState(false);
  const [round, setRound] = useState(false);
  const [contrast, setContrast] = useState(false);

  return (
    <Layout pdef={pageDef}>
      <PTabs>
        <Tabs.Tab label="Setting">
          <div style={{}}>
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

            <div style={{ marginTop: 20, marginBottom: 20, display: 'flex', gap: 20 }}>
              <Checkbox
                label="Round"
                color="dark"
                checked={round}
                onChange={(event) => setRound(event.currentTarget.checked)}
              />
              <Checkbox
                label="Contrast"
                color="dark"
                checked={contrast}
                onChange={(event) => setContrast(event.currentTarget.checked)}
              />
            </div>

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

            <Space h={20} />

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
          </div>
        </Tabs.Tab>
        <Tabs.Tab label="Monitoring">
          <Text size="sm" style={{ lineHeight: 1.5, marginBottom: 20 }}>
            Ketika pendaftaran belum diset atau belum buka, halaman ini kosong.
          </Text>
          <Text size="sm" style={{ lineHeight: 1.5, marginBottom: 20 }}>
            Sejak tanggal mulai pendaftaran, halaman berisi tabel daftar pendaftar.
          </Text>
          <Text size="sm" style={{ lineHeight: 1.5, marginBottom: 20 }}>
            Pasca pendaftaran disediakan tombol konfirmasi untuk bisa melakukan seleksi
            administrasi.
          </Text>
          <Text size="sm" style={{ lineHeight: 1.5, marginBottom: 20 }}>
            Ketikan proyek sudah selesai, tabel tidak lagi tersedia (archived), tetapi ada download
            linknya.
          </Text>
          <Text size="sm" style={{ lineHeight: 1.5, marginBottom: 20 }}>
            With Fjord Tours you can explore more of the magical fjord landscapes with tours and
            activities on and around the fjords of Norway
          </Text>
        </Tabs.Tab>
        <Tabs.Tab label="Sorting">
          <Text size="sm" style={{ lineHeight: 1.5, marginBottom: 20 }}>
            Ketika pendaftaran belum diset atau belum buka, halaman ini kosong.
          </Text>
          <Text size="sm" style={{ lineHeight: 1.5, marginBottom: 20 }}>
            Ketika data sudah dikonfirmasi, halaman ini berisi aplikasi seleksi administrasi.
          </Text>
        </Tabs.Tab>
      </PTabs>
    </Layout>
  );
}
