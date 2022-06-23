import { Button, createStyles, Table } from '@mantine/core';
import Banner from '../components/Banner/Banner';
import Layout from '../components/Layout/Layout';

const useStyles = createStyles((theme) => ({
  td: {
    padding: 10,
    backgroundColor: theme.colors.gray[1], // '#f3f6f9',
    borderStyle: 'solid',
    borderColor: theme.colors.gray[3], // '#dee2e6',
    borderWidth: '1px 0 1px 0',
  },
  tdLeft: {
    padding: 10,
    borderRadius: '5px 0 0 5px',
    backgroundColor: '#f3f6f9',
    borderStyle: 'solid',
    borderColor: '#dee2e6',
    borderWidth: '1px 0 1px 1px',
    textAlign: 'center',
  },
  tdRight: {
    padding: 10,
    borderRadius: '0 5px 5px 0',
    backgroundColor: '#f3f6f9',
    borderStyle: 'solid',
    borderColor: '#dee2e6',
    borderWidth: '1px 1px 1px 0',
  },
}));

export default function Vertical() {
  const { classes } = useStyles();
  const banner = (
    <Banner title="Team Members">
      <Button size="md" variant="outline" color="dark" radius={3}>
        Invite
      </Button>
    </Banner>
  );

  return (
    <Layout banner={banner}>
      <Table verticalSpacing={10}>
        <tbody>
          <tr style={{ fontWeight: 500 }}>
            <td style={{ padding: 0 }} width={40}>
              <div className={classes.tdLeft}>#</div>
            </td>
            <td style={{ padding: 0 }}>
              <div className={classes.td}>Nama</div>
            </td>
            <td style={{ padding: 0 }}>
              <div className={classes.td}>Email</div>
            </td>
            <td style={{ padding: 0 }}>
              <div className={classes.td}>Telepon</div>
            </td>
            <td style={{ padding: 0 }} width={60}>
              <div className={classes.tdRight}>Cmd</div>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr style={{ color: '#789' }}>
            <td align="center">1</td>
            <td>Nama</td>
            <td>Email</td>
            <td>Telepon</td>
            <td>Cmd</td>
          </tr>
          <tr style={{ color: '#789' }}>
            <td align="center">2</td>
            <td>Nama</td>
            <td>Email</td>
            <td>Telepon</td>
            <td>Cmd</td>
          </tr>
          <tr>{/* <td colSpan={4}></td> */}</tr>
        </tbody>
      </Table>
    </Layout>
  );
}
