'use client'

import './navbar.css';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';

const pages = ['Home', 'Akademik', 'Berita dan Pengumuman', 'Layanan Online', 'Tentang I-Tech'];
const navLinks = pages.map((link) => {
  const linkName = link;
  let linkHref = '/' + link.replace(/\s+/g, '-').toLowerCase();

  if (linkName === 'Home') {
    linkHref = '/';
  }
  return { name: linkName, href: linkHref };
});

function NavLinks({ visibility, toggle }) {
  const pathName = usePathname();

  return (
    <ul className='navbar-navlinks' visibility={visibility ? 'true' : null}>
      {navLinks.map((link) => {
        const isActive = pathName === link.href;
        return (
          <li key={link.name}>
            <Link
              href={link.href}
              onClick={() => toggle(!visibility)}
              className={isActive ? 'active' : ''}
            > {link.name} </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className='navbar'>
      {/* Fix this later */}
      <Link href={'/'} className='navbar-logo'>
        <Image src='/i-tech-logo.png' alt='Logo STTI I-Tech' 
          fill={true}
        />
      </Link>

      <Hamburger label='Buka Navigasi' toggled={isOpen} toggle={setOpen}></Hamburger>
      <NavLinks visibility={isOpen} toggle={setOpen}></NavLinks>
    </nav>
  );
}