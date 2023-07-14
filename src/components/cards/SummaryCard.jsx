import style from './SummaryCard.module.css';
import { sanityLoader } from '@/utils/sanity/loader';
import { PortableText } from '@portabletext/react';

export const SummaryCard = ({ props }) => {
  const image = props.image ? sanityLoader(props.image).height(200).width(350).url() : '/hero-banner/1.jpeg';
  const imageAlt = props.image ? props.image.alt : 'placeholder image'

  return (
    <section className={style.container}>
      <h2>{props.name}</h2>
      <img src={image} alt={imageAlt} />
      <div className={style.content_container}>
        <PortableText value={props.content} />
      </div>
    </section>
  );
}