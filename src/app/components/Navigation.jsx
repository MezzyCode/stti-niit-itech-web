'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Profil', href: '/profil' },
  { name: 'Kontak', href: '/kontak' },
  { name: 'Berita dan Pengumuman', href: '/berita-pengumuman'}
]

export default function Navigation() {
  const pathName = usePathname();

  return (
    <nav className="nav">
      {navLinks.map((link) => {
        const isActive = pathName === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={isActive ? 'active' : null}
          > {link.name} </Link>
        )
      })}
    </nav>
  );
}