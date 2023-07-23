import Link from 'next/link';
import Icon from './Icon';
import './styled-link.css';

export default function StyledLink({ name, href = '/', className }) {
  return (
    <Link className={`styled-link ${className}`} href={href}>
      {name} <Icon name={'navigate_next'} />
    </Link>
  );
}