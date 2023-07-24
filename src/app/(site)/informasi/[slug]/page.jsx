import style from './style.module.css';
import { getInformasi, getInformasiSlug } from '@/utils/sanity/utils';
import { sanityLoader } from '@/utils/sanity/loader';
import ContentText from '@/components/ContentText';
import { ListContainer } from '@/components/ListContainer';
import { InfoCard } from '@/components/cards/InfoCard';

export default async function Page({ params }) {
  const post = await getInformasiSlug(params.slug);
  const dataInformasiLimited = await getInformasi(4, post.category);

  const image = post.image ? sanityLoader(post.image).url() : '/hero-banner/1.jpeg'
  const imageAlt = post.image ? post.image.alt : 'placeholder image'

  return (
    <section className={style.container}>
      <article className={style.post}>
        <h2>{post.name}</h2>
        <img
          className={style.image}
          src={image}
          alt={imageAlt} />
        <ContentText value={post.content} />
      </article>
      <aside className={style.aside}>
        <h2>Post Terkait</h2>
        <ListContainer>
          {dataInformasiLimited.map((informasi) => (
            <InfoCard key={informasi._id}
              props={informasi}
            />
          ))}
        </ListContainer>
      </aside>
    </section>
  )
}