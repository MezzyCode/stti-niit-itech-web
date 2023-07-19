import { Sosmed } from '../Icon';
import Link from 'next/link';
import Logo from '../Logo';
import style from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={style.container}>
            <section className={style.content}>
                <Logo />
                <div>
                    <p>Kampus STTI NIIT I-TECH<br />
                        Jl. Asem Dua No.22, Cipete Selatan<br />
                        Kec. Cilandak, Kota Jakarta Selatan<br />
                        Daerah Khusus Ibukota Jakarta 12410
                    </p>
                    <p><strong>Phone</strong>: (+62) 21 751 5870</p>
                    <p><strong>Email</strong>: info@i-tech.ac.id</p>
                </div>
            </section>
            <section className={style.content}>
                <strong>Tentang Kami</strong>
                <ul>
                    <li><Link href='/sejarah-stti-niit'>Sejarah STTI-NIIT</Link></li>
                    <li><Link href='/visi-misi'>Visi & Misi</Link></li>
                    <li><Link href='/struktur-organisasi'>Struktur Organisasi</Link></li>
                    <li><Link href='/staff'>Staff dan Team Kami</Link></li>
                </ul>
            </section>
            <section className={style.content}>
                <strong>Temukan Kami</strong>
                <div>
                    <Sosmed
                        url='https://www.youtube.com/@sttiniiti-tech2300'
                        fgColor='--color-primary'
                    />
                    <Sosmed
                        url='https://www.facebook.com/stti.n.itech'
                        fgColor='--color-primary'
                    />
                    <Sosmed
                        url='https://www.instagram.com/sttiniititech/'
                        fgColor='--color-primary'
                    />
                    <Sosmed
                        url='https://twitter.com/i/flow/login?redirect_after_login=%2Fstti_itech'
                        fgColor='--color-primary'
                    />
                    <Sosmed
                        url='https://linktr.ee/sttiniititech'
                        fgColor='--color-primary'
                    />
                </div>
            </section>
        </footer>
    )
}

export default Footer