import {
  ActionIcon,
  createStyles,
  Group,
  NumberInput,
  NumberInputHandlers,
  Paper,
  Space,
  Text,
} from '@mantine/core';
import Banner from '../components/Banner/Banner';
import AppHeader from '../components/Header/AppHeader';
import { useRouter } from 'next/router';
import SelectProduct from '../components/SelectProduct/SelectProduct';
import { useRef, useState } from 'react';
import { DatePicker } from '@mantine/dates';

export default function BuildProject() {
  const { classes } = useStyles();
  const router = useRouter();
  // const {templ} = router.query

  const [value, setValue] = useState(0);
  const [date, setDate] = useState<Date | null>(null);
  const handlers = useRef<NumberInputHandlers>();

  return (
    <>
      <div className={classes.header}>
        <div className={classes.container}>
          <AppHeader />
        </div>
      </div>
      <div className={classes.container} style={{ paddingTop: 65 }}>
        <Banner title="Create New Project" />

        <Paper
          px={16}
          pt={12}
          mb={20}
          withBorder
          sx={{ backgroundColor: '#fafafa', fontWeight: 500 }}
        >
          Project type:{` `}
          <span style={{ fontWeight: 800 }}>Recruitment</span>
          <div
            style={{
              marginLeft: -16,
              marginRight: -16,
              paddingLeft: 16,
              paddingRight: 16,
              marginTop: 12,
              paddingTop: 12,
              paddingBottom: 12,
              backgroundColor: 'white',
              borderTop: '1px solid #e6e6e6',
            }}
          >
            PSP
          </div>
        </Paper>

        <Paper px={16} py={12} mb={20} withBorder sx={{ backgroundColor: '#fafafa' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
            <Text weight={400} style={{ flexBasis: 160, fontSize: 14 }}>
              Jumlah peserta:
            </Text>
            <NumberInput
              // hideControls
              value={value}
              onChange={(val: number) => setValue(val)}
              handlersRef={handlers}
              min={1}
              step={1}
              styles={{ input: { width: 94, paddingLeft: 2, textAlign: 'center' } }}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Text weight={400} style={{ flexBasis: 160, fontSize: 14 }}>
              Tanggal Assessmen:
            </Text>
            <DatePicker
              inputFormat="DD MMMM YYYY"
              value={date}
              onChange={(val: any) => setDate(val)}
              min={1}
              step={1}
            />
          </div>
        </Paper>

        <Space h={300} />
      </div>
    </>
  );
}

const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: 12,
    paddingBottom: 12,
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray[3],
    backgroundColor: 'white',
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 5,
  },
  container: {
    maxWidth: 1000,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 32,
    paddingRight: 32,

    '@media (max-width: 768px)': {
      paddingLeft: 20,
      paddingRight: 20,
    },
  },
}));
