import { StyledHeader } from '../StyledHeader';
import StyledLink from '../StyledLink';
import style from './ProdiCard.module.css';
import ContentText from '../ContentText';

export const ProdiCard = ({ props }) => {
    const prodiName = props.name.replace('Program Studi: ', '')

    return (
        <li className={style.container} theme={prodiName} >
            <StyledHeader title={prodiName} />
            <ContentText value={props.content} />
            <StyledLink name={'Lebih Lanjut'} href={`/post${props.slug}`} />
        </li>
    )
}