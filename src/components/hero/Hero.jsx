'use client'

import Image from 'next/image'
import styles from './Hero.module.css';
import { usePathname } from 'next/navigation';
import { NAVLINKS } from '@/utils/pathUtils';

export default function Hero() {
    const pathName = usePathname();

    const getCurrentLinkName = () => {
        const currentLink = NAVLINKS.find((link) => link.href === pathName);
        if (currentLink.href === '/') {
            return 'Selamat Datang di Sekolah Tinggi Teknologi Informasi NIIT'
        }

        return currentLink ? currentLink.name : '';
    };

    return (
        <div className={styles.container}>
            <Image className={styles.background} src='/hero-banner/1.jpeg' alt='Foto I-Tech' fill={true} priority={'high'}/>
            <div className={styles.content}>
                <h1 className={styles.header}>{getCurrentLinkName()}</h1>
            </div>
        </div>
    )
}