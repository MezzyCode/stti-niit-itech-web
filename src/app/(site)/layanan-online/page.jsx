import { ListContainer } from "@/components/ListContainer"
import { GenericCard } from "@/components/cards/GenericCard";
import { SummaryCard } from "@/components/cards/SummaryCard"
import { getLayananInformasi, getPostByName } from "@/utils/sanity/utils"

export const metadata = {
  title: 'ITech: Layanan Online',
  description: 'Halaman Layanan Online'
}

export default async function Page() {
  const layananOnline = await getLayananInformasi();

  return (
    <section >
      <SummaryCard
        props={await getPostByName('Layanan Online')}
      />
      <ListContainer>
        {layananOnline.map((item) => (
          <GenericCard key={item._id} props={item} />
        ))}
      </ListContainer>
    </section>
  )
}