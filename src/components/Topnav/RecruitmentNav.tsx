import Sidebar from 'components/Sidebar/Sidebar';
import { Aperture } from 'tabler-icons-react';
import Topnav from './Topnav';

const links = [
  { href: '/pro', label: 'Overview', hidden: false, icon: <Aperture size={18} /> },
  { href: '/pro/setup', label: 'Setup', hidden: false, icon: <Aperture size={18} /> },
  { href: '/pro/pendaftaran', label: 'Pendaftaran', hidden: false, icon: <Aperture size={18} /> },
  { href: '/pro/seleksi', label: 'Seleksi', hidden: false, icon: <Aperture size={18} /> },
  { href: '/pro/interview', label: 'Wawancara', hidden: false, icon: <Aperture size={18} /> },
  { href: '/pro/report', label: 'Laporan', hidden: false, icon: <Aperture size={18} /> },
  { href: '/pro/billing', label: 'Billing', hidden: false, icon: <Aperture size={18} /> },
];

export function RecruitmentNav({ fixed, scroll }: { fixed: boolean; scroll: number }) {
  return <Topnav links={links} fixed={fixed} scroll={scroll} />;
}

export function SidebarRecuitment() {
  return <Sidebar links={links} />;
}
