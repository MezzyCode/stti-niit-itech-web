import { GenericCard, InfoCard, ProdiCard, SummaryCard } from '@/components/Cards';
import Icon from '@/components/Icon';
import Post from '@/database/post.json';
import Info from '@/database/info.json';

export default function Page() {
  return (
    <article>
      <SummaryCard
        title={Post[0][1].title}
        content={Post[0][1].content}
        link={'/'} />
      <SummaryCard
        variant='right'
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
      <h2> Berita dan Pengumuman</h2>
      {Info.map(item => {
        return (
          <InfoCard
            key={item.id}
            type={item.type}
            title={item.title}
            content={item.content}
          />
        )
      })}
    </article>
  )
}
