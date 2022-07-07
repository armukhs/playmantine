import Layout, { PageDefinition } from '../../../components/yellow/Layout';
import { elementStyles } from '../../../components/yellow/Element.styles';
import { Button, Space, Text, TextInput, Stack, Accordion, useAccordionState } from '@mantine/core';
import Datarow from '../../../components/yellow/Datarow';
import { useState } from 'react';
import { useForm } from '@mantine/form';
import FormControl from '../../../components/yellow/FormControl';

const pageDef: PageDefinition = {
  type: 'project',
  projectType: 'Recruitment',
  channel: 'overview',
  channelTitle: 'Overview',
};

export default function ProjectPage() {
  const { classes, cx } = elementStyles();
  const [editing, setEditing] = useState(false);
  const form = useForm({
    initialValues: {
      gunung: 'Gunung Rinjani',
      danau: 'Danau Singkarak Perjuangan',
    },
  });
  const [state, handlers] = useAccordionState({ total: 1, initialItem: 0 });

  return (
    <Layout pdef={pageDef}>
      <div
        className={classes.box}
        style={{ marginTop: 10, marginBottom: 30, padding: '10px 15px 18px' }}
      >
        ONBOARDING BOX
        <br />
        Closeable, dan hanya muncul setelah project creation. Isinya, misalnya, silakan melakukan
        setting untuk pendaftaran, atau mengedit info di bawah. Juga, misalnya, link ke dokumentasi.
      </div>

      <div className={classes.box} style={{ marginBottom: 30, padding: '10px 15px 18px' }}>
        DASHBOARD STATUS
        <br />
        Pada masa pendaftaran berisi status pendaftaran: jumlah pendaftar, countdown.
        <br />
        Pada masa tes berisi status tes: ...
        <br />
        Pada masa wawancara berisi status wawancara ...
      </div>

      <div className={classes.box} style={{ marginTop: 10, padding: '10px 15px 15px' }}>
        <div
          style={{
            margin: '-10px -15px 0',
            padding: '10px 15px',
            display: 'flex',
            borderBottom: `1px solid #678`,
          }}
        >
          <div style={{ fontWeight: 800, flexGrow: 1 }}>Project Info</div>
          <Button
            compact
            size="xs"
            className={classes.btnSecondary}
            style={{ boxShadow: 'none' }}
            onClick={() => {
              setEditing(true);
              handlers.toggle(0);
            }}
          >
            Edit
          </Button>
        </div>

        <Space h={15} />

        <Stack spacing={8}>
          <Datarow
            label="Judul proyek"
            bind={[form, 'gunung']}
            compactAt={480}
            readOnly={!editing}
          />
          <Datarow label="Client" bind={[form, 'danau']} compactAt={480} readOnly={!editing} />
          <Datarow
            label="Target pendaftar"
            bind={[form, 'danau']}
            compactAt={480}
            readOnly={!editing}
          />
          <Datarow
            label="Target seleksi"
            bind={[form, 'danau']}
            compactAt={480}
            readOnly={!editing}
          />
          <Datarow
            label="Target akhir"
            bind={[form, 'danau']}
            compactAt={480}
            readOnly={!editing}
          />
          <Datarow
            label="Project manager"
            bind={[form, 'danau']}
            compactAt={480}
            readOnly={!editing}
          />
          <Datarow label="Catatan" bind={[form, 'danau']} compactAt={480} readOnly={!editing} />
          {editing && (
            <FormControl compactAt={480}>
              <Button size="xs" className={classes.btnPrimary} style={{ boxShadow: 'none' }}>
                Save
              </Button>
              <Button
                size="xs"
                className={classes.btnSecondary}
                // style={{ boxShadow: 'none' }}
                onClick={() => {
                  setEditing(false);
                  form.reset();
                }}
              >
                Cancel
              </Button>
            </FormControl>
          )}
        </Stack>
      </div>

      <Space h={20} />

      <p>
        Rust for JavaScript Developers is a new course that builds on your familiarity with
        JavaScript to teach you Rust. It covers language fundamentals, popular patterns in Rust and
        the package ecosystem.
      </p>

      <div className={classes.box} style={{ padding: '10px 15px 18px' }}>
        LOKO
      </div>
    </Layout>
  );
}
