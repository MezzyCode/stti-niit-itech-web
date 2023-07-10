import { SummaryCard } from '@/components/cards/Cards'

export const metadata = {
  title: 'I-Tech: Akademik',
  description: 'Generated by create next app'
}

export default function Page() {
  return (
    <section className="container">
      <SummaryCard
        title='Layanan Akademik'
        content='Sebagai salah satu institusi pendidikan tinggi yang berorientasi pada sistem pendidikan berbasis penelitian, STTI NIIT I-Tech selalu berusaha agar sistem pendidikan yang ada mampu mempersiapkan mahasiswa-mahasiswinya bersaing secara global dalam segala aspek, baik di bidang ilmu sains, sosial humaniora, dan kedokteran. Untuk itu diperlukan pembangunan budaya dan atmosfer intelektual yang intensif dan konsisten. Hal ini sepenuhnya didukung oleh organisasi dan manajemen yang saling mendukung satu sama lain, mulai dari Dewan Pembina, Kabinet Direksi, Ketua Program Studi hingga Tim Administrasi.

        Dalam menjalankan operasionalnya, pihak manajemen STTI NIIT I-Tech menggunakan prinsip transparansi dan akuntabilitas. Dengan prinsip ini, diharapkan STTI NIIT I-Tech mampu berkembang pesat dalam skala global sebagai lembaga pendidikan tinggi dengan tradisi akademik yang telah terbentuk sejak awal berdirinya.'
        link={'/'}
        variant='simple'
        />
    </section >
  )
}