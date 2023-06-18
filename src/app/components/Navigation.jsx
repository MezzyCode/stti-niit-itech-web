'use client'

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react'

const navLinks = [];
const pages = ['Home', 'Akademik', 'Berita dan Pengumuman', 'Layanan Online', 'Tentang I-Tech'];
pages.forEach(link => {
  const linkName = link;
  let linkHref = link.replace(/\s+/g, '-').toLowerCase();
  if (linkName === 'Home') {
    linkHref = '/';
  }
  navLinks.push({ name: linkName, href: linkHref })
});

function NavLinks() {
  const pathName = usePathname();

  return (
    <ol className='navbar-navlinks'>
      {navLinks.map((link) => {
        const isActive = pathName === link.href;
        return (
          <ul key={link.name}>
            <Link
              href={link.href}
              className={isActive ? 'active' : null}
            > {link.name} </Link>
          </ul>
        )
      })}
    </ol>
  )
}

export default function Navigation() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link href={'/'} className='navbar-logo'>
        <Image src='/i-tech-logo.png' alt='Logo STTI I-Tech' fill={true} />
      </Link>

      <Hamburger label='Buka Navigasi' toggled={isOpen} toggle={setOpen}></Hamburger>
      <NavLinks></NavLinks>
    </nav>
  );
}