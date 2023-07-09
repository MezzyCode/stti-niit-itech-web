import { getInformasiPost } from '@/utils/sanity/utils'
import styles from './style.module.css';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';

export default async function PostPage({ params }) {
  const post = await getInformasiPost(params.post);
  return (
    <section>
      <article className={styles.container}>
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