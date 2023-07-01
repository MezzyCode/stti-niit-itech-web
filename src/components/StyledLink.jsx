import Link from 'next/link';
import Icon from './Icon';
import './styled-link.css';

export default function StyledLink({ name, href }) {
  return (
    <Link className='styled-link' href={href ? '/' : ''}>
      {name} <Icon name={'navigate_next'}/> 
    </Link>
  );
}