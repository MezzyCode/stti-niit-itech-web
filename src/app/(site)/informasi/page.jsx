import { StyledHeader } from '@/components/StyledHeader';
import { getInformasi } from '@/utils/sanity/utils';
import { InfoCard } from '@/components/cards/InfoCard';
import { ListContainer } from '@/components/ListContainer';

export const metadata = {
  title: 'ITech: Informasi',
  description: 'Halaman Informasi'
}

export default async function Page() {
  const dataInformasi = await getInformasi();

  return (
    <section >
      <StyledHeader title="Berita dan Pengumuman" variant="right" />
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