import style from './GenericCard.module.css';
import Icon from '../Icon';
import ContentText from '../ContentText';
import Link from 'next/link';

export const GenericCard = ({ props }) => {
    return (
        <li className={style.container}>
            <Link href={props.url}>
                <Icon name={props.icon} className={style.icon} />
            </Link>
            <div className={style.content_container}>
                <strong>{props.name}</strong>
                <ContentText value={props.content} />
            </div>
        </li>
    )
}


