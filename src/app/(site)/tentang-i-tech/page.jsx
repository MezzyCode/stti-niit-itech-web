import { SummaryCard } from '@/components/cards/SummaryCard';
import { getPostByName } from '@/utils/sanity/utils';

export const metadata = {
  title: 'I-Tech: Tentang I-Tech',
  description: 'Tentang I-Tech'
}

export default async function Page() {
  return (
    <section >
      <SummaryCard props={await getPostByName('Sejarah STTI NIIT')} />
      <SummaryCard props={await getPostByName('Visi & Misi')} />
      <SummaryCard props={await getPostByName('Struktur Organisasi')} />
    </section>
  )
}