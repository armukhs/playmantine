import { createStyles, Space } from '@mantine/core';
import Banner from '../components/Banner/Banner';
import AppHeader from '../components/Header/AppHeader';
import { useRouter } from 'next/router';
import SelectProduct from '../components/SelectProduct/SelectProduct';

export default function NewProject() {
  const { classes } = useStyles();
  const router = useRouter();
  // const {templ} = router.query

  return (
    <>
      <div className={classes.header}>
        <div className={classes.container}>
          <AppHeader />
        </div>
      </div>
      <div className={classes.container} style={{ paddingTop: 65 }}>
        <Banner title="Create New Project" />

        <SelectProduct />

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
