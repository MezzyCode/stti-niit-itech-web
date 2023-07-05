import Image from 'next/image'
import './hero.css'

export default function Hero() {
    return (
        <div className='hero'>
            <Image className='hero-background'
                src='/hero-banner/1.jpeg' alt='Foto I-Tech'
                fill={true}
            />
            <div className='hero-content'>
                <h1 className='hero-header'>Selamat Datang di
                    Sekolah Tinggi Teknologi Informasi NIIT</h1>
                <p>#JadilahGenerasiTeknologi</p>
            </div>
        </div>
    )
}