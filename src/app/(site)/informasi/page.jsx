import { StyledHeader } from '@/components/StyledHeader';
import { getInformasi } from '@/utils/sanity/utils';
import { InfoCard } from '@/components/cards/InfoCard';

export const metadata = {
  title: 'ITech: Informasi',
  description: 'Halaman Informasi'
}

export default async function Page() {
  const dataInformasi = await getInformasi();

  return (
    <section >
      <StyledHeader title="Berita dan Pengumuman" variant="right" />
      <ul className="info-page">
        {dataInformasi.map((informasi) => (
          <InfoCard key={informasi._id}
            props={informasi}
          />
        ))}
      </ul>
    </section>
  )
}