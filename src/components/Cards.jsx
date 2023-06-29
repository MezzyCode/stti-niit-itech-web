import './cards-summary.css';
import './cards-prodi.css';
import './cards-generic.css';
import StyledLink from './StyledLink';

export const SummaryCard = ({ variant = 'left', title, content, link }) => {
    let summaryCardHeaderClass = 'summaryCardHeader';
    let summaryCardImageClass = 'summaryCardImage';

    switch (variant) {
        case 'right':
            summaryCardImageClass += ' reversed';
            break;

        default:
            break;
    }

    return (
        <section className='summaryCard'>
            <div className={summaryCardHeaderClass}>
                <h2>{title}</h2>
                <hr />
            </div>
            <div className={summaryCardImageClass}>
            </div>
            <div className='summaryCardContent'>
                <p>{content}</p>
                <StyledLink name={'Selengkapnya'} href={link} />
            </div>
        </section>
    );
}

export const GenericCard = ({ icon, title, description, link }) => {
    return (
        <section className='generic-card'>
            {icon}
            <div className='generic-card-content'>
                <h2>{title}</h2>
                <p>{description}</p>
                <StyledLink name={'Selengkapnya'} href={link}></StyledLink>
            </div>
        </section>
    )
}

export const ProdiCard = () => {
    return (
        <section>This is Prodi Card

        </section>
    )
}

