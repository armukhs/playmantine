import { Table, Title } from '@mantine/core';
import Layout from '../../components/Layout/Layout';
import { createStyles } from '@mantine/core';

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
    borderRadius: '9px 0 0 9px',
    backgroundColor: '#f3f6f9',
    borderStyle: 'solid',
    borderColor: '#dee2e6',
    borderWidth: '1px 0 1px 1px',
    textAlign: 'center',
  },
  tdRight: {
    padding: 10,
    borderRadius: '0 9px 9px 0',
    backgroundColor: '#f3f6f9',
    borderStyle: 'solid',
    borderColor: '#dee2e6',
    borderWidth: '1px 1px 1px 0',
  },
}));

const title = 'Team';

export default function TenantPage() {
  const { classes } = useStyles();
  return (
    <Layout>
      <Title mt={30} sx={{ fontSize: 32 }}>
        {title}
      </Title>
      <br />
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
