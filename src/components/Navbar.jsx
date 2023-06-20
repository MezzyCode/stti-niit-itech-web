'use client'

import './navbar.css';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';

const navLinks = [];
const pages = ['Home', 'Akademik', 'Berita dan Pengumuman', 'Layanan Online', 'Tentang I-Tech'];
pages.forEach(link => {
  const linkName = link;
  let linkHref = '/' + link.replace(/\s+/g, '-').toLowerCase();
  if (linkName === 'Home') {
    linkHref = '/';
  }
  navLinks.push({ name: linkName, href: linkHref })
});
console.log(navLinks);

function NavLinks(props) {
  const pathName = usePathname();
  const visibility = props.visibility;
  const toggle = props.toggle;

  return (
    <ol className='navbar-navlinks' visibility={visibility ? 'true' : null}>
      {navLinks.map((link) => {
        const isActive = pathName === link.href;
        return (
          <ul key={link.name}>
            <Link
              href={link.href}
              onClick={() => toggle(!props.visibility)}
              className={isActive ? 'active' : null}
            > {link.name} </Link>
          </ul>
        )
      })}
    </ol>
  )
}

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className='navbar'>
      <Link href={'/'} className='navbar-logo'>
        <Image src='/i-tech-logo.png' alt='Logo STTI I-Tech' fill={true} />
      </Link>

      <Hamburger label='Buka Navigasi' toggled={isOpen} toggle={setOpen}></Hamburger>
      <NavLinks visibility={isOpen} toggle={setOpen}></NavLinks>
    </nav>
  );
}