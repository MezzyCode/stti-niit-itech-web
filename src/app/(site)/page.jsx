import { ListContainer } from '@/components/ListContainer';
import { SummaryCard } from '@/components/cards/SummaryCard';
import { ProdiCard } from '@/components/cards/ProdiCard';
import { getInformasi, getPostBySlug, getProdi } from '@/utils/sanity/utils';
import { StyledHeader } from '@/components/StyledHeader';
import { InfoCard } from '@/components/cards/InfoCard';

export default async function Page() {
  const prodi = await getProdi();
  const dataInformasiLimited = await getInformasi(4);

  return (
    <section >
      <SummaryCard props={await getPostBySlug('sambutan-ketua')} />
      <StyledHeader
        title='Program Studi'
        variant='center'
      />
      <ListContainer>
        {prodi.map((item) => (
          <ProdiCard key={item._id}
            props={item}
            limit={true}
          />
        ))}
      </ListContainer>
      <StyledHeader
        title='Informasi Terbaru'
        variant='center'
      />
      <ListContainer>
        {dataInformasiLimited.map((informasi) => (
          <InfoCard key={informasi._id}
            props={informasi}
          />
        ))}
      </ListContainer>
    </section>
  )
}
