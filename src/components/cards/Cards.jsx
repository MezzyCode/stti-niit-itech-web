import Link from 'next/link';
import './cards.css';
import StyledLink from '../StyledLink';
import { StyledHeader } from '../StyledHeader';
import { PortableText } from '@portabletext/react';
import { sanityLoader } from '@/utils/sanity/loader';

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
    let image = props.image ? sanityLoader(props.image).height(200).width(350).url() : '/hero-banner/1.jpeg'
    let imageAlt = props.image ? props.image.alt : 'placeholder image'

    return (
        <li className='info-card' category={props.category}>
            <span className='category'>{props.category}</span>
            <Link href={link} >
                {/* <Image src={sanityLoader(props.image).width(500).url()} alt={props.image.alt} fill={true} sizes='100vh' /> */}
                <img src={image} alt={imageAlt} className='image'/>
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
