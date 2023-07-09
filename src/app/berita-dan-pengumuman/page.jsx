import { StyledHeader } from '@/components/StyledHeader';
import { getInformasi } from '@/utils/sanity/utils';
import { InfoCard } from '@/components/cards/Cards';

export const metadata = {
  title: 'ITech: Berita Dan Pengumuman',
  description: 'Halaman Berita dan Pengumuman'
}

export default async function Page() {
  const informasi = await getInformasi();

  return (
    <section >
      <StyledHeader title="Berita dan Pengumuman" variant="right" />
      <ul className="info-page">
        {informasi.map((item) => (
          <InfoCard key={item._id}
            props = {item}
          />
        ))}
      </ul>
    </section>
  )
}