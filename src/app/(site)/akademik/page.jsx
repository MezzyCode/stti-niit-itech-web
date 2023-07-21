import { ListContainer } from "@/components/ListContainer";
import { StyledHeader } from "@/components/StyledHeader";
import { ProdiCard } from "@/components/cards/ProdiCard";
import { SummaryCard } from "@/components/cards/SummaryCard";
import { getPostByName, getProdi } from "@/utils/sanity/utils"

export const metadata = {
  title: 'ITech: Akademik',
  description: 'Halaman Akademik'
}

export default async function Page() {
  const prodi = await getProdi();

  return (
    <section>
      <StyledHeader
        id='program-studi'
        title='Program Studi'
        variant='center' />
      <ListContainer>
        {prodi.map((item) => (
          <ProdiCard key={item._id} props={item} />
        ))}
      </ListContainer>
        <SummaryCard
          id='verifikasi-ijazah'
          props={await getPostByName('Verifikasi Ijazah')} />
    </section>
  )
}