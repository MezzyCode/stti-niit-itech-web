import './SummaryCard.css';
import StyledLink from './StyledLink';

export default function SummaryCard({ title, content, link }) {
    return (
        <article className='summaryCard'>
            <div className='summaryCardHeader'>
                <h2>{title}</h2>
                <hr />
            </div>
            <div className='summaryCardImage'>
            </div>
            <div className='summaryCardContent'>
                <p>{content}</p>
                <StyledLink name={'Selengkapnya >'} href={link}/>
            </div>
        </article>
    )
}
