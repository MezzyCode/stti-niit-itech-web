import './cards.css';
import StyledLink from './StyledLink';

const CardHeader = ({ title, variant = '' }) => {
    return (
        <div className={`card-header ${variant}`}>
            <hr />
            <h2>{title}</h2>
            <hr />
        </div>
    )
}

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
            <CardHeader variant={variant} title={title} />
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
                <CardHeader title={title} />
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
                <CardHeader title={title} />
                {icon}
                <p>{content}</p>
                <StyledLink name={'Lebih Lanjut'} href={link} />
            </div>
        </section>
    )
}

export const InfoCard = ({ type, title, content, link }) => {
    return (
        <section type={type}>
            <CardHeader variant='' title={title} />
            <p>{content}</p>
            <StyledLink name={'Selengkapnya'} link={link} />
        </section>
    )
}
