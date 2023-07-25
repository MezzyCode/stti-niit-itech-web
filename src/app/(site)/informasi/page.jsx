import { StyledHeader } from '@/components/StyledHeader';
import { getInformasi } from '@/utils/sanity/utils';
import { InfoCard } from '@/components/cards/InfoCard';
import { ListContainer } from '@/components/ListContainer';
// import style from './page.module.css';

export const metadata = {
  title: 'ITech: Informasi',
  description: 'Halaman Informasi'
}

export default async function Page() {
  const dataInformasi = await getInformasi();

  return (
    <section >
      <StyledHeader title="Informasi" variant="right" />
      {/* <div className={style.button_container}>
        <button className={`${style.button} ${style.semua}`}>Semua</button>
        <button className={`${style.button} ${style.berita}`}>Berita</button>
        <button className={`${style.button} ${style.pengumuman}`}>Pengumuman</button>
      </div> */}
      <ListContainer>
        {dataInformasi.map((informasi) => (
          <InfoCard key={informasi._id}
            props={informasi}
          />
        ))}
      </ListContainer>
    </section>
  )
}