import { StyledHeader } from '../StyledHeader';
import StyledLink from '../StyledLink';
import style from './ProdiCard.module.css';

export const ProdiCard = ({ icon, theme, title, content, link }) => {
  return (
      <section className={style.container}>
          <div className={style.item} theme={theme}>
              <StyledHeader title={title} />
              {icon}
              <p>{content}</p>
              <StyledLink name={'Lebih Lanjut'} href={link} />
          </div>
      </section>
  )
}