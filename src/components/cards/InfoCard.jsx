import style from './InfoCard.module.css'
import Link from 'next/link';
import { sanityLoader } from '@/utils/sanity/loader';
import { PortableText } from '@portabletext/react';

export const InfoCard = ({ props }) => {
  let date = new Date(props._createdAt);
  let formattedDate = date.toLocaleString(undefined, { day: '2-digit', month: '2-digit', year: "numeric" });
  let link = `/informasi/${props.slug}`;
  let image = props.image ? sanityLoader(props.image).height(200).width(350).url() : '/hero-banner/1.jpeg'
  let imageAlt = props.image ? props.image.alt : 'placeholder image'

  return (
    <li className={style.container} category={props.category}>
      <span className={style.category}>{props.category}</span>
      <Link href={link} >
        <img src={image} alt={imageAlt} className={style.image} />
      </Link>
      <div className={style.content}>
        <h3 className='title'>
          <Link href={link}>{props.name}</Link>
        </h3>
        <span className={style.date}>{formattedDate}</span>
        <div className={style.content_text}>
          <PortableText value={props.content} />
        </div>
      </div>
    </li>
  )
}