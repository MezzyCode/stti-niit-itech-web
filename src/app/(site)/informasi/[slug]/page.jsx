import styles from './style.module.css';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { getInformasiSlug } from '@/utils/sanity/utils';

export default async function Page({ params }) {
  const post = await getInformasiSlug(params.slug);
  return (
    <section className={styles.container}>
      <article className={styles.post}>
        <h2>{post.name}</h2>
        <div className={styles.image}>
          <Image src={post.image_url} alt={post.image_alt} fill={true} sizes='100vh' />
        </div>
        <PortableText value={post.content} />
      </article>
      <aside className={styles.aside}>
        <h2>Post Terkait</h2>
      </aside>
    </section>
  )
}