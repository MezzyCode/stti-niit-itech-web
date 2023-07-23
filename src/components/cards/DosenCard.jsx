import { sanityLoader } from '@/utils/sanity/loader';
import style from './DosenCard.module.css';

export const DosenCard = ({ props }) => {
  return (
    <li className={style.container}>
      <img
        className={style.image}
        src={sanityLoader(props.image).url()}
        alt={props.image.alt}
      />
      <div className={style.content_container}>
        <strong className={style.name}>{props.name}</strong>
        <span className={style.role}>{props.role}</span>
      </div>
    </li>
  )
}