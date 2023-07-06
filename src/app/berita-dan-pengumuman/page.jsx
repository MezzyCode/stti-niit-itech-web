import { StyledHeader } from '@/components/StyledHeader';
import { InfoCard } from '@/components/cards/cards';
import Infos from '@/database/info.json';

export const metadata = {
  title: 'ITech: Berita Dan Pengumuman',
  description: 'Halaman Berita dan Pengumuman'
}

export default async function Page() {
  return (
    <section >
      <StyledHeader title="Berita dan Pengumuman" variant="right"/>
      <ul className="info-page">
        {Infos.map(info => {
          return <InfoCard key={info.id} type={info.type} title={info.title} content={info.content} link={`/berita-dan-pengumuman/${info.id}`} />
        })}
      </ul>
    </section>
  )
}