import './cards.css';
import StyledLink from '../StyledLink';
import { StyledHeader } from '../StyledHeader';

export const SummaryCard = ({ title = 'Title', content = 'Content', link = '/', variant = '' }) => {
    if (variant === 'simple') {
        return (
            <section className='simple-summary-card'>
                <StyledHeader title={title} variant='right' headingLevel={2} />
                <div className='content'>{content}</div>
                <StyledLink name={'Selengkapnya'} href={link} />
            </section>
        )
    }

    return (
        <section className='summary-card'>
            <StyledHeader title={title} variant={variant} />
            <div className={`summary-card-image ${variant === 'right' ? 'right' : ''}`} />
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
