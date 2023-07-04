import Link from 'next/link';
import './cards.css';
import StyledLink from './StyledLink';
import { StyledHeader } from './StyledHeader';

export const SummaryCard = ({ variant = 'left', title, content, link }) => {
    let summaryCardImageClass = 'summary-card-image';

    switch (variant) {
        case 'right':
            summaryCardImageClass += ' reversed';
            break;

        default:
            break;
    }

    return (
        <section className='summary-card'>
            <StyledHeader variant={variant} title={title} />
            <div className={summaryCardImageClass}>
            </div>
            <div className='summary-card-content'>
                <p>{content}</p>
                <StyledLink name={'Selengkapnya'} href={link} />
            </div>
        </section>
    );
}

export const GenericCard = ({ icon, title, content, link }) => {
    return (
        <section className='generic-card'>
            {icon}
            <div className='generic-card-content'>
                <StyledHeader title={title} />
                <p>{content}</p>
                <StyledLink name={'Selengkapnya'} href={link}></StyledLink>
            </div>
        </section>
    )
}

export const ProdiCard = ({ icon, theme, title, content, link }) => {
    return (
        <section className='prodi-card'>
            <div className='prodi-card-content' theme={theme}>
                <StyledHeader title={title} />
                {icon}
                <p>{content}</p>
                <StyledLink name={'Lebih Lanjut'} href={link} />
            </div>
        </section>
    )
}

// Temp for InfoCard Testing
const generateDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    const todayDate = `${year}-${month}-${day}`;
    return todayDate;
}


export const InfoCard = ({ type, title, content, link }) => {
    return (
        <article className='info-card' type={type}>
            <span className='type'>{type}</span>
            <Link href={link}>
                <div className='image' />
                <StyledHeader variant='' title={title} headingLevel={3} />
                <span className='date'>{generateDate()}</span>
            </Link>
            <p>{content}</p>
        </article>
    )
}
