'use client';

import styles from './Navbar.module.css';
import './hamburger.css';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { NAVLINKS } from '@/utils/pathUtils';

function NavLinks({ visibility, toggle }) {
  const pathName = usePathname();

  return (
    <ul className={styles.navlinks} visibility={visibility ? 'true' : ''}>
      {NAVLINKS.map((link) => {
        const isActive = pathName === link.href;
        return (
          <li key={link.name} >
            <Link
              href={link.href}
              onClick={() => toggle(!visibility)}
              className={`${styles.navlink} ${isActive ? styles.active : ''}`}
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
    <nav className={styles.container}>
      <Link href={'/'} className={styles.logo}>
        <Image src='/i-tech-logo.png' alt='Logo STTI I-Tech'
          width={170} height={30}
        />
      </Link>

      <Hamburger
        label='Buka Navigasi'
        toggled={isOpen}
        toggle={setOpen} />
      <NavLinks
        visibility={isOpen}
        toggle={setOpen} />
    </nav>
  );
}