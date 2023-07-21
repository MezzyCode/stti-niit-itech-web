import StyledLink from '../StyledLink';
import style from './ProdiCard.module.css';
import ContentText from '../ContentText';

export const ProdiCard = ({ props, limit = false }) => {
    const prodiName = props.name.replace('Program Studi: ', '')

    return (
        <li className={style.container} theme={prodiName} >
            <h2 className={style.header}>{prodiName}</h2>
            <ContentText value={props.content} limit={limit}/>
            {limit && <StyledLink name={'Lebih Lanjut'} href={`/akademik/#program-studi`} />}
        </li>
    )
}