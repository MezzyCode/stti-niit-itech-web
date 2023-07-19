import { ListContainer } from '@/components/ListContainer';
import { SummaryCard } from '@/components/cards/SummaryCard';
import { getPostByName } from '@/utils/sanity/utils';
import { ProdiCard } from '@/components/cards/ProdiCard';
import { getProdi } from '@/utils/sanity/utils';
import { StyledHeader } from '@/components/StyledHeader';

export default async function Page() {
  const prodi = await getProdi();

  return (
    <section >
      <SummaryCard props={await getPostByName('Sambutan Ketua')} />
      <StyledHeader
        title='Program Studi'
        variant='center'
      />
      <ListContainer>
        {prodi.map((item) => (
          <ProdiCard key={item._id}
            props={item}
          />
        ))}
      </ListContainer>
      <StyledHeader
        title='Berita Terbaru'
        variant='center'
      />
    </section>
  )
}
