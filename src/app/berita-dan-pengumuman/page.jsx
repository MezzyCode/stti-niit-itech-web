import { StyledHeader } from '@/components/StyledHeader';
import { getInformasi } from '@/sanity/utils';
import { InfoCard } from '@/components/cards/cards';

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
            type={item.category}
            title={item.name}
            content={item.content}
            link={item.slug}
          />
        ))}
      </ul>
    </section>
  )
}