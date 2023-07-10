import Image from 'next/image'
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <div className={styles.container}>
            <Image className={styles.background}
                src='/hero-banner/1.jpeg' alt='Foto I-Tech'
                fill={true}
            />
            <div className={styles.content}>
                <h1 className={styles.header}>Selamat Datang di Sekolah Tinggi Teknologi Informasi NIIT</h1>
                <p>#JadilahGenerasiTeknologi</p>
            </div>
        </div>
    )
}