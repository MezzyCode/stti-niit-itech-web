import ContentText from '../ContentText';
import { StyledHeader } from '../StyledHeader';
import style from './SummaryCard.module.css';
import { sanityLoader } from '@/utils/sanity/loader';

export const SummaryCard = ({ props }) => {
  const image = props.image ? sanityLoader(props.image).url() : '/hero-banner/1.jpeg';
  const imageAlt = props.image ? props.image.alt : 'placeholder image'

  return (
    <div id={props.slug}>
      <StyledHeader
        className={style.header}
        variant='center'
        title={props.name} />
      <section className={style.container}>
        {props.image && <img className={style.image} src={image} alt={imageAlt} />}
        <div className={style.context}>
          <ContentText value={props.content} />
        </div>
      </section>
    </div>
  );
}