import './cards.css';
import StyledLink from '../StyledLink';
import { StyledHeader } from '../StyledHeader';

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


