import { layoutStyles } from './Layout.styles';

export default function MobileNav({ fixed }: { fixed: boolean }) {
  const { classes, cx } = layoutStyles();

  const links = [
    { href: '/ye/pro', label: 'Overview' },
    { href: '/ye/pro/registrasi', label: 'Pendaftaran' },
    { href: '/ye/pro/seleksi', label: 'Tes Seleksi' },
    { href: '/ye/pro/interview', label: 'Wawancara' },
    { href: '/ye/pro/report', label: 'Laporan' },
    { href: '/ye/pro/billing', label: 'Billing' },
  ];

  return (
    <div className={cx(classes.navWrap, { [classes.navWrapScrolled]: fixed })}>
      <div className={cx(classes.nav, { [classes.navFixed]: fixed })}>
        <div className={classes.container}>
          <div className={classes.flex} style={{ gap: 25, fontSize: 13.25, fontWeight: 500 }}>
            <div>Overview</div>
            <div>Pendaftaran</div>
            <div>Tes Online</div>
            <div>Wawancara</div>
            <div>Laporan</div>
            <div>Billing</div>
          </div>
        </div>
      </div>
    </div>
  );
}
