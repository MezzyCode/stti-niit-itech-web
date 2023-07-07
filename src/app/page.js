import { GenericCard, ProdiCard, SummaryCard } from '@/components/cards/cards';
import Icon from '@/components/Icon';
import Post from '@/database/post.json';

export default function Page() {
  return (
    <section className='container'>
      <SummaryCard
        title={Post[0][1].title}
        content={Post[0][1].content}
        link={'/'} />
      <SummaryCard
        variant='right'
        title={Post[0][2].title}
        content={Post[0][2].content} link={'/'} image='yes' />
      <SummaryCard
        variant='center'
        title={Post[0][2].title}
        content={Post[0][2].content} link={'/'} />
      <div className='prodi-cards'>
        <ProdiCard
          icon={<Icon name={'analytics'} />}
          theme={Post[1][1].theme}
          title={Post[1][1].title}
          content={Post[1][1].content} link={'/'} />
        <ProdiCard
          icon={<Icon name={'app_shortcut'} />}
          theme={Post[1][2].theme}
          title={Post[1][2].title}
          content={Post[1][2].content} link={'/'} />
      </div>
      <GenericCard
        icon={<Icon name={'school'} />}
        title={Post[0][3].title}
        content={Post[0][3].content} link={'/'}
      />
    </section>
  )
}
