import { SummaryCard } from '@/components/cards/SummaryCard';
import { getPostBySlug } from '@/utils/sanity/utils';

export const metadata = {
  title: 'I-Tech: Tentang I-Tech',
  description: 'Tentang I-Tech'
}

export default async function Page() {
  return (
    <section >
      <SummaryCard props={await getPostBySlug('sejarah-stti-niit')} />
      <SummaryCard props={await getPostBySlug('visi-and-misi')} />
      <SummaryCard props={await getPostBySlug('struktur-organisasi')} />
    </section>
  )
}