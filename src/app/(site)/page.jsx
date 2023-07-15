import { SummaryCard } from '@/components/cards/SummaryCard';
import { getPostByName } from '@/utils/sanity/utils';

export default async function Page() {
  // TODO: Optimize getPostByName
  return (
    <section >
      <SummaryCard props={await getPostByName('Sambutan Ketua')}/>
    </section>
  )
}
