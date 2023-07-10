import Link from 'next/link';
import './cards.css';
import StyledLink from '../StyledLink';
import Image from 'next/image';
import { StyledHeader } from '../StyledHeader';
import { PortableText } from '@portabletext/react';

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

export const InfoCard = ({ props }) => {
    let date = new Date(props._createdAt);
    let formattedDate = date.toLocaleString(undefined, { day: '2-digit', month: '2-digit', year: "numeric" });
    let link = `/informasi/${props.slug}`;

    return (
        <li className='info-card' category={props.category}>
            <span className='category'>{props.category}</span>
            <Link href={link} className='image'>
                <Image
                    src={props.image_url}
                    alt={props.image_alt}
                    fill={true}
                    sizes='50vh'
                    objectPosition={`${props.hotspot_x}px ${props.hotspot_y}px`} />
            </Link>
            <div className='content-container'>
                <h3 className='title'>
                    <Link href={link}>{props.name}</Link>
                </h3>
                <span className='date'>{formattedDate}</span>
                <div className='content'>
                    <PortableText value={props.content} />
                </div>
            </div>
        </li>
    )
}
